module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-undef': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
<<<<<<< HEAD
=======
    'react/button-has-type': 'off',
    'no-unused-vars': 'off',
>>>>>>> ecba23f867ee8ad34766bd6702660e4f3b4cfb73
    camelcase: 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: [
          '**/*.stories.tsx',
        ],
      },
    ],
  },
};
