module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:import/recommended',
  ],
  settings: {
    'import/resolver': {
      extensions: [ '.js', '.scss', '.json', '.vue' ],
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [ 'error', { code: 130 } ],
    'no-use-before-define': 'off',
    'no-return-assign': 'off',
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
    'computed-property-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'template-curly-spacing': [ 'error', 'always' ],
  },
};
