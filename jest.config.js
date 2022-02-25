module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/", "<rootDir>/specs/"],
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest",
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testEnvironment: "jsdom", 

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: ["<rootDir>/specs/index.js"]
};
