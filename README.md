# LehiHV - Landing Page Profesional

Landing page profesional para portafolio y CV, desarrollada con HTML, CSS y JavaScript vanilla.

## Vista en Produccion

Este proyecto queda listo para publicarse en GitHub Pages con un flujo automatico de GitHub Actions.

- URL esperada (repositorio de usuario): https://lehihv.github.io/

## Ejecutar en Local

Como es una landing estatica, puedes abrir `index.html` directamente en el navegador o usar un servidor local simple.

Con VS Code, opcion recomendada:

1. Instala la extension `Live Server`.
2. Abre `index.html`.
3. Click derecho y selecciona `Open with Live Server`.

## Deploy en GitHub Pages

El repositorio ya incluye el workflow:

- `.github/workflows/deploy-pages.yml`

Para activarlo:

1. Haz commit y push de los cambios a `main`.
2. Ve a `Settings > Pages` en GitHub.
3. En `Build and deployment`, selecciona `Source: GitHub Actions`.
4. Espera a que termine el workflow `Deploy Landing to GitHub Pages`.
5. Tu sitio estara disponible en la URL publica de GitHub Pages.

## Estructura

- `index.html`: estructura principal de la landing.
- `styles.css`: estilos, layout responsive y animaciones.
- `script.js`: comportamiento basico (anio dinamico).
- `.nojekyll`: evita procesamiento Jekyll.
- `.github/workflows/deploy-pages.yml`: pipeline de despliegue.

## Contacto

- LinkedIn: https://www.linkedin.com/in/lehi-hv/
- GitHub: https://github.com/LehiHV
