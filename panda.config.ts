import { defineConfig } from "@pandacss/dev";
import { go1dPreset } from '@go1private/foundation'

export default defineConfig({
  preflight: true,
  presets: [go1dPreset],

  include: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@go1private/react/dist/panda.buildinfo.json",],
  exclude: [],

  theme: {
    extend: {},
  },

  outdir: "styled-system",
});
