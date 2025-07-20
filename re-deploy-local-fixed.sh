#!/bin/bash

echo "🛑 Deteniendo contenedor local (ailabmind-web)..."
docker stop ailabmind-web 2>/dev/null || true
docker rm ailabmind-web 2>/dev/null || true

echo "🚀 Ejecutando contenedor local con build más reciente..."
docker run -d --name ailabmind-web -p 8080:80 ailabmind/static-web

echo "✅ Sitio disponible localmente en: http://localhost:8080"
