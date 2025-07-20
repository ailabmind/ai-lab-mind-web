#!/bin/bash

echo "🚀 Iniciando build y push limpio para AI Lab Mind..."

# Verificar ruta
cd ~/Desktop/AI-LAB-MIND-WEB || { echo '❌ Carpeta no encontrada'; exit 1; }

# Mostrar resumen
echo "📁 Archivos encontrados:"
ls -1 blog.html index.html
echo "📄 Posts:"
ls -1 assets/posts/*.html | wc -l
echo "🖼️ Imágenes:"
ls -1 assets/img/*.png | wc -l

# Limpiar cache anterior
echo "🧹 Limpiando cache Docker buildx..."
docker builder prune -a -f

# Build con plataforma correcta (amd64) y sin cache
echo "🔨 Haciendo build y push de imagen multiarquitectura..."
docker buildx build \
  --no-cache \
  --platform linux/amd64 \
  -t ailabmind/ailabmind-web:latest \
  --push .

echo "✅ Build completo y push enviado a Docker Hub."
echo "📝 Ahora conéctate al servidor y ejecuta tu comando de redeploy:"
echo ""
echo "   docker stop ailabmind-web"
echo "   docker rm ailabmind-web"
echo "   docker pull ailabmind/ailabmind-web:latest"
echo "   docker run -d --name ailabmind-web -p 8088:80 ailabmind/ailabmind-web:latest"
