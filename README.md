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

- ``npm run start`` - starts only the webpack dev server;
- ``npm run start:vite`` - starts only the vite dev server;
- ``npm run dev`` - starts frontend and backend servers(webpack + json-server) in dev mode;
- ``npm run dev:vite`` - starts frontend and backend servers(vite + json-server) in dev mode;
- ``npm run start:dev:server`` - starts only backend server(json-server) on port 8000 in default configuration;
- ``npm run custom:server`` - starts only backend server(json-server) on port 8000 in configuration for this project(use this); 
- ``npm run build:prod`` - building the frontend project in production mode;
- ``npm run build:dev`` - building the frontend project in development mode; 
- ``npm run lint:ts`` - starts linting typescript code in project (.ts , .tsx);
- ``npm run lint:ts:fix`` - start linting typescript code in project with ``--fix`` flag, and corrects errors
if there is a fixer in the established rules;
- ``npm run lint:scss`` - starts linting SCSS code in project (.scss);
- ``npm run lint:scss:fix`` - start linting SCSS code in project with ``--fix`` flag, and corrects errors
if there is a fixer in the established rules;
- ``npm run jest:init`` - starts generating the jest-configuration file;
- ``npm run test:unit`` - starts unit testing all test files (*.test.ts, *.test.tsx), if you need to run testing one
file, you can put the name after space;
- ``npm run test:ui`` - starts testing UI on local machine with docker;
- ``npm run test:ui:ok`` - approve the changes in UI which were found after the command above;
- ``npm run test:ui:ci`` - starts testing UI on virtual machine(github actions);
- ``npm run test:ui:report`` - creates a report UI tests in HTML page and json file;
- ``npm run test:ui:json`` - creates a report UI tests in json file;
- ``npm run test:ui:html`` - creates a report UI tests in HTML page;
- ``npm run storybook`` - starts the storybook of this project(from files *.stories.tsx) on port 6006;
- ``npm run storybook:build`` - building the storybook of this project;
- ``npm run prepare`` - starts to prepare pre-commit hooks on local machine after install the project; 
- ``npm run generate:slice`` - starts generating FSD slice in the project. After space, put the layer name, and then 
one more space to put the slice name.