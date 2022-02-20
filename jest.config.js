module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/", "<rootDir>/specs/"],
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest",
  },
  testEnvironment: "jsdom",
};
