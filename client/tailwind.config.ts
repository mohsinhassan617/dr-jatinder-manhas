import sharedConfig from "../tailwind.config.ts";

/** @type {import('tailwindcss').Config} */
export default {
  
  ...sharedConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../server/**/*.{ts,js}",
  ],
};
