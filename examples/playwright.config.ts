import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const BASE_URL = 'https://en.wikipedia.org';
const PROJECT_DIR = './module2/lesson2/base-practice';
const SETUP_PATH_REGEX = '**/*.setup.ts';
const LOGGED_IN_PATH_REGEX = '**/logged-in/*.spec.ts';

export const STORAGE_STATE = path.join(
  __dirname,
  `${PROJECT_DIR}/playwright/.user/auth.json`
);

export default defineConfig({
  testDir: `${PROJECT_DIR}/tests`, // w tym folderze znajduja sie testy e2e
  fullyParallel: true, // test uruchamiaja sie wspolbierznie, w tym samym czasie i bede niezalezne
  forbidOnly: !!process.env.CI, // sprawia, ze testy.only nie jest uruchamiany podczas CI
  retries: process.env.CI ? 2 : 0, // ile razy maja byc testy uruchamiane jest bedzie fail
  workers: process.env.CI ? 1 : undefined, // ile zasobow ma byc uzytych podczas testow. Undefined -> 50%
  reporter: [
    ['html', { outputFolder: `${PROJECT_DIR}/playwright/html-report` }],
  ], // wynik testow w roznych formatach
  use: {
    // ustawia globalne opcje dla wszystkich testow
    baseURL: BASE_URL, // jak uzywany page.goto('/'), to wystarczy uzyc "/" zeby dojsc do bazowego url
    trace: 'on', // informacje krok po kroku co sie w testach dzialo
    actionTimeout: process.env.CI ? 10000 : 5000,
    navigationTimeout: process.env.CI ? 30000 : 15000,
  },
  outputDir: `${PROJECT_DIR}/playwright/test-results`, // sciezka gdzie beda tracy umieszczane
  projects: [
    // konfiguracja roznych typow testow i zaleznosc i miedzy nimi
    {
      name: 'setup',
      testMatch: SETUP_PATH_REGEX,
    },
    {
      name: 'e2e tests - logged in',
      dependencies: ['setup'],
      testMatch: LOGGED_IN_PATH_REGEX,
      use: {
        // wskazuje gdzie testy maja pozyskiwac dostep do naszej sesji
        storageState: STORAGE_STATE,
      },
    },
    {
      name: 'e2e tests',
      testIgnore: [SETUP_PATH_REGEX, LOGGED_IN_PATH_REGEX],
    },
  ],
});
