#!/bin/bash

echo "🛑 Deteniendo contenedor actual (ailabmind-web)..."
docker stop ailabmind-web 2>/dev/null || true
docker rm ailabmind-web 2>/dev/null || true

echo "⬇️ Obteniendo la última imagen desde Docker Hub..."
docker pull ailabmind/ailabmind-web:latest

echo "🚀 Iniciando contenedor en puerto 8088..."
docker run -d --name ailabmind-web -p 8088:80 ailabmind/ailabmind-web:latest

echo "✅ Despliegue completo: http://TU-IP:8088/blog.html"
