# Simple Weather App

## Overview

This application is built with Laravel framework and integrated from the 3rd party application to get the real-time weather and location of the user.

## Tech Stack

- **Frontend:** Vue3 Vite TailwindCSS
- **Backend API:** Laravel API - https://github.com/monroenikko/weather-api

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

### Prerequisites

- Node.js (>= 21.x)
- npm or yarn

- **Clone the repository**

  ```bash
  git clone https://github.com/monroenikko/weather-client.git
  cd weather-client

  ```

```sh
npm install
```

```sh
touch .env
```

### Add Base URL from the Backend API in the .env file

VITE_BASE_URL=http://localhost:8000/api

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
