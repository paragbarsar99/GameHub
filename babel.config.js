module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    development: {
      plugins: [
        [
          'babel-plugin-inline-import',
          {
            extensions: ['.svg'],
          },
        ],
        [
          'module-resolver',
          {
            root: ['./app'],
            extensions: [
              '.ios.js',
              '.android.js',
              '.js',
              '.ts',
              '.tsx',
              '.json',
            ],
            alias: {
              '@components': './app/components',
              '@screens': './app/screens',
              '@assets': './app/assets',
              '@store': './app/store',
              '@services': './app/services',
              '@styles': './app/styles',
            },
          },
        ],
        'react-native-reanimated/plugin',
      ],
    },
    production: {
      plugins: [
        'transform-remove-console',
        [
          'babel-plugin-inline-import',
          {
            extensions: ['.svg'],
          },
        ],
        [
          'module-resolver',
          {
            root: ['./app'],
            extensions: [
              '.ios.js',
              '.android.js',
              '.js',
              '.ts',
              '.tsx',
              '.json',
            ],
            alias: {
              '@components': './app/components',
              '@screens': './app/screens',
              '@assets': './app/assets',
              '@store': './app/store',
              '@services': './app/services',
              '@styles': './app/styles',
            },
          },
        ],
        'react-native-reanimated/plugin',
      ],
    },
  },
};
