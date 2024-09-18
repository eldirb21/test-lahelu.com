module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    // 'react-native/no-unused-styles': 2,
    // 'react-hooks/rules-of-hooks': 'off',

    //import rules
    // 'eslint-disable-next-line': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/order': 'off',
    // 'import/no-duplicates': 'off',
    // 'import/first': 'off',
    // 'import/prefer-default-export': 'off',
    // 'import/newline-after-import': 'off',
    // 'import/no-named-default': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
