module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
    'import',
    'simple-import-sort',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['useSelector', 'useDispatch'],
            message:
              'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
          },
          // {
          //   name: 'react-native',
          //   importNames: ['Button', 'Text', 'Modal', 'Switch', 'TextInput'],
          //   message:
          //     'Use AppButton, AppText, AppModal, AppSwitch and AppTextInput instead.',
          // },
        ],
      },
    ],
  },
};
