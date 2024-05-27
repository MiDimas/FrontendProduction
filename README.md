# Frontend project 

**This project is being developed for the practice of frontend development and study new tools and technologies**

## Starting project

``npm install --force`` - installing dependencies. It's temporarily recommended to install with the `--force` flag. This is
necessary because some dependencies are not compatible with each other.  
  
``npm run dev`` or ``npm run dev:vite`` - first command is running the project in dev mode with **webpack** and **json-server**,
second command is running the project in dev mode with **vite** and **json-server**. If you want to change the code while application is running,
then use **vite** to rebuild the application faster. 

----

## Scripts

- ``npm run start`` - starts only the webpack dev server,
- ``npm run start:vite`` - starts only the vite dev server,
- ``npm run dev`` - starts frontend and backend servers(webpack + json-server) in dev mode,
- ``npm run dev:vite`` - starts frontend and backend servers(vite + json-server) in dev mode,
- ``npm run start:dev:server`` - starts only backend server(json-server) on port 8000 in default configuration,
- ``npm run custom:server`` - starts only backend server(json-server) on port 8000 in configuration for this project(use this), 
- ``npm run build:prod`` - building the frontend project in production mode,
- ``npm run build:dev`` - building the frontend project in development mode, 

[//]: # (  "lint:ts": "eslint \"**/*.{ts,tsx}\"",)

[//]: # (  "lint:ts:fix": "eslint \"**/*.{ts,tsx}\" --fix",)

[//]: # (  "lint:scss": "npx stylelint \"**/*.scss\"",)

[//]: # (  "lint:scss:fix": "npx stylelint \"**/*.scss\" --fix",)

[//]: # (  "jest:init": "jest --init",)

[//]: # (  "test:unit": "jest --config ./config/jest/jest.config.ts",)

[//]: # (  "test:ui": "npx loki test",)

[//]: # (  "test:ui:ok": "npx loki approve",)

[//]: # (  "test:ui:ci": "npx loki --requireReference --reactUri file:./storybook-static",)

[//]: # (  "test:ui:report": "npm run test:ui:json && npm run test:ui:html",)

[//]: # (  "test:ui:json": "node scripts/generate-visual-json-report.js",)

[//]: # (  "test:ui:html": "reg-cli --from .loki/report.json --report .loki/report.html",)

[//]: # (  "storybook": "storybook dev -p 6006 -c ./config/storybook",)

[//]: # (  "storybook:build": "storybook build -c ./config/storybook",)

[//]: # (  "prepare": "husky install",)

[//]: # (  "generate:slice": "node ./scripts/createSlice/index.js")