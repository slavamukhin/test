const path = require('path');

module.exports = {
  roots: ['<rootDir>'],
  rootDir: path.resolve(__dirname, '../../'),
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleDirectories: ['src', 'node_modules'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '.(js|jsx)$': require.resolve('babel-jest'),
    '.(ts|tsx)$': require.resolve('ts-jest'),
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}'],
  testURL: 'http://localhost',
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|doc|docx|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@assets/(.*)': '<rootDir>/assets/$1',
    '@src/(.*)': '<rootDir>/src/$1',
    '^react$': '<rootDir>/node_modules/react',
  },
  setupFilesAfterEnv: ['<rootDir>/testSetup.ts']
};
