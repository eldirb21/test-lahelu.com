module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // components
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',

          // assets
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',

          // constants
          '@constants': './src/constants',

          // hooks
          '@hooks': './src/hooks',

          // navigate
          '@nav': './src/nav',

          // pages
          '@pages': './src/pages',

          // utils
          '@utils': './src/utils',

          // stores
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
