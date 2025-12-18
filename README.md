# 🌦 Flow Weather

**Flow Weather** es una aplicación web moderna y minimalista diseñada para ofrecer pronósticos meteorológicos precisos con una interfaz fluida y elegante. Construida con **React** y alimentada por la API de **Open-Meteo**, la aplicación detecta automáticamente tu ubicación para brindarte información inmediata.

## ✨ Características Principales

-   **Geolocalización Automática**: Detecta tu ubicación actual al ingresar para mostrarte el clima local.
-   **Selección de Ciudades**: Explora el clima en ciudades preconfiguradas como Bogotá, New York, Sydney, Estocolmo y Cairo.
-   **Pronóstico Detallado de 7 Días**: Visualiza métricas completas que incluyen:
    -   Temperaturas mínimas y máximas.
    -   Sensación térmica media.
    -   Probabilidad de precipitación y nubosidad.
    -   Velocidad del viento, visibilidad y presión atmosférica.
    -   Índice UV y horas de salida/puesta del sol.
-   **Diseño Premium**: Interfaz con tema oscuro, acentos neón y micro-animaciones para una experiencia visual superior.
-   **Responsive**: Totalmente adaptada para dispositivos móviles y escritorio.

## 🚀 Tecnologías Utilizadas

-   **Runtime**: [Bun](https://bun.sh/) - El motor de JavaScript todo en uno increíblemente rápido.
-   **Framework**: React 19.
-   **Estado**: Zustand (gestión de estado global eficiente).
-   **Estilos**: CSS Modules (estilado modular y mantenible).
-   **API**: Open-Meteo (sin necesidad de API keys).
-   **Testing**: Bun Test (Unit/Integration) y Playwright (E2E).
-   **Calidad de Código**: Biome (Linter y Formatter ultra rápido).

## 🛠️ Comandos de Desarrollo

Asegúrate de tener [Bun](https://bun.sh/) instalado en tu sistema.

### Instalación de dependencias
```bash
bun install
```

### Ejecutar en modo desarrollo
Inicia el servidor en `http://localhost:3000` con Hot Module Replacement (HMR).
```bash
bun run dev
```

### Construcción para producción
```bash
bun run build
```

### Iniciar servidor de producción
```bash
bun run start
```

### Ejecutar Tests Unitarios
```bash
bun test
```

### Ejecutar Tests E2E (Playwright)
Ejecuta las pruebas de extremo a extremo en todos los navegadores configurados.
```bash
bun run e2e
```

Para abrir la interfaz de usuario de Playwright:
```bash
bun run e2e:ui
```

### Verificación de código (Linter/Formatter)
```bash
bun run check
```
