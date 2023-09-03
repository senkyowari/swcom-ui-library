module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'prettier',
    'plugin:storybook/recommended',
    // 'plugin:mdx/recommended',
  ],
  settings: {
    // 'mdx/code-blocks': true,
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.mdx'],
  },
  plugins: ['react'],
  rules: {
    // 'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
