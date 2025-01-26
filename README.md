# CMT Board game

## Running the app

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project details

### This project uses

- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo" width="20" height="20"> React (Next.js)
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" alt="TypeScript logo" width="20" height="20"> TypeScript
- <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind logo" width="20" height="20"> TailwindCSS
- <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="Zustand logo" width="20" height="20"> Zustand (state management)
- <img src="https://vitest.dev/logo-shadow.svg" alt="Vitest logo" width="20" height="20"> Vitest (unit tests)

### Features

- A board game that finds lines horizontally, vertically and diagonally that are 3 or longer and colors them in a predefined color.
- The board size can be dynamically changed via the lib/constant variables.
- The app is responsive and can be resized in realtime.
- Unit tests insure that the linesCalculator pure function works correctly. You can run the tests with

```bash
yarn test
```

- To ensure clean state, Zustand was implemented to keep state in a globally accessible store.
- To ensure type safety TypeScript was used.
- Prettier keeps the code formatted

### Node version

v23.6.0
