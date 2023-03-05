## Code overview

This is a front-end TypeScript webapp with support for universal React.

All source code lives in `src` directory:

src
├── App.tsx
├── components
│ ├── auto-complete
│ │ ├── auto-complete.css
│ │ ├── auto-complete.tsx
│ │ └── index.ts
│ ├── box
│ │ ├── box.css
│ │ ├── box.tsx
│ │ └── index.ts
│ ├── container
│ │ ├── container.css
│ │ ├── container.tsx
│ │ └── index.ts
│ ├── highlighted-text
│ │ ├── highlighted-text.css
│ │ ├── highlighted-text.tsx
│ │ └── index.ts
│ ├── index.ts
│ ├── input-field
│ │ ├── **test**
│ │ │ └── input-field.test.tsx
│ │ ├── index.ts
│ │ ├── input-field.css
│ │ └── input-field.tsx
│ ├── label
│ │ ├── index.ts
│ │ ├── label.css
│ │ └── label.tsx
│ └── option
│ ├── **test**
│ │ └── option.test.tsx
│ ├── index.ts
│ ├── option.css
│ └── option.tsx
├── index.css
├── index.tsx

## You can see a Live DEMO on

[https://some-assessment-03-2023.vercel.app/](https://some-assessment-03-2023.vercel.app/)

## How to run the project in dev mode

Run in the project folder:

1. `npm install` (to install the dependencies)
2. `npm start` (to start the project)
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Available NPM commands

| Command                         | Description                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------- |
| `npm run start`                 | start webapp in local development mode.                                           |
| `npm run build`                 | Builds the app for production to the `build` folder.                              |
| `npm run test`                  | run unit tests and generate code coverage report.                                 |
