module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/*.js"
  ],
  coverageDirectory: "coverage",
  moduleDirectories: [
    "src",
    "node_modules"
  ],
  roots: [
    "<rootDir>/test"
  ],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/*test.js"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!animejs)/"
  ]
};
