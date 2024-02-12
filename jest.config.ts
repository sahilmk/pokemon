import type { Config } from "jest";

const config: Config = {
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;
