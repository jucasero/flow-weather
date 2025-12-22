# 🌦 Flow Weather

**Flow Weather** is a modern and minimalist web application designed to offer accurate weather forecasts with a fluid and elegant interface. Built with **React** and powered by the **Open-Meteo API**, the application automatically detects your location to provide you with immediate information.

## ✨ Key Features

-   **Automatic Geolocation**: Detects your current location upon entry to show you the local weather.
-   **City Selection**: Explore the weather in pre-configured cities like Bogotá, New York, Sydney, Stockholm, and Cairo.
-   **Detailed 7-Day Forecast**: View comprehensive metrics including:
    -   Minimum and maximum temperatures.
    -   Average thermal sensation.
    -   Precipitation probability and cloud cover.
    -   Wind speed, visibility, and atmospheric pressure.
    -   UV Index and sunrise/sunset times.
-   **Premium Design**: Dark theme interface with neon accents and micro-animations for a superior visual experience.
-   **Responsive**: Fully adapted for both mobile and desktop devices.

## 🚀 Technologies Used

-   **Runtime**: [Bun](https://bun.sh/) - The incredibly fast all-in-one JavaScript engine.
-   **Framework**: React 19.
-   **State Management**: Zustand (efficient global state management).
-   **Styling**: CSS Modules (modular and maintainable styling).
-   **API**: Open-Meteo (no API keys required).
-   **Testing**: Bun Test (Unit/Integration) and Playwright (E2E).
-   **Code Quality**: Biome (Ultra-fast Linter and Formatter).

## 🛠️ Development Commands

### Prerequisites
- **Node.js**: v22.12.0 (specified in `.nvmrc`)
- **Bun**: Make sure you have [Bun](https://bun.sh/) installed on your system.

### Dependency Installation
```bash
bun install
```

### Run in Development Mode
Starts the server at `http://localhost:3000` with Hot Module Replacement (HMR).
```bash
bun dev
```

### Build for Production
```bash
bun run build
```

### Start Production Server
```bash
bun start
```

### Run Unit Tests
```bash
bun test
```

### Run E2E Tests (Playwright)
Runs end-to-end tests in all configured browsers.
```bash
bun e2e
```

To open the Playwright UI:
```bash
bun e2e:ui
```

### Code Verification (Linter/Formatter)
```bash
bun check
```
