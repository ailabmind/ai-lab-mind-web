
# AI Lab Mind — Posts Only

Este repositorio contiene exclusivamente los archivos HTML de los posts del blog de AI Lab Mind, organizados para su respaldo, revisión, y automatización.

## 🗂 Estructura

```
posts/
├── post-automatiza-sin-programar.html
├── post-empresa-artesanal-en.html
├── post-hablar-mejor.html
└── ...
```

## 📌 Objetivo

Este repositorio o rama `posts-only` está pensado para:

- Tener un historial limpio de contenido editorial
- Facilitar la integración con herramientas como Memo o N8N
- Respaldar y revisar artículos antes de publicarlos

## 📦 Qué contiene

- Archivos `.html` con formato final para cada post
- Mismo nombre del archivo = `slug` del artículo
- Imágenes y estilos se cargan desde el contenedor principal

## 🚀 Cómo contribuir

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ailabmind/ai-lab-mind-web.git
   git checkout posts-only
   ```

2. Agrega tus nuevos posts en `/posts/`

3. Confirma y sube los cambios:

   ```bash
   git add .
   git commit -m "Agrega post y-a-mi-que (EN)"
   git push
   ```

## 🧠 Mantenimiento

- Todos los archivos deben estar bien formateados
- Evita subir versiones preliminares (usa `main` para eso)
- No incluyas scripts ni assets globales

## 🔗 Integraciones

Este repositorio puede ser usado por:

- **Memo**: para enviar automáticamente el contenido a Google Drive
- **N8N**: como fuente de datos para publicaciones programadas
- **GitHub Actions**: si deseas automatizar despliegues o validaciones

---

🧠 Proyecto: [AI Lab Mind](https://ailabmind.com)  
📫 Contacto: [info@ailabmind.com](mailto:info@ailabmind.com)
