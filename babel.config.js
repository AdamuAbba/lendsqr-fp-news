module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['.'],
          alias: {
            assets: './app/assets',
            components: './app/components',
            screens: './app/screens',
            utils: './app/utils',
            routes: './app/routes',
            configs: './app/configs',
            features: './app/features',
            services: './app/services',
          },
        },
      ],
      '@babel/plugin-proposal-unicode-property-regex',
      'react-native-reanimated/plugin',
    ],
  };
};
