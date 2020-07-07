module.exports = {
  rootDir: ".",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: ['/node_modules/']
}