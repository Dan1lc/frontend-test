module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': [ 'error', 2 ],
    'camelcase':[ 'error', {
      properties: 'always',
    } ],
    'semi':[ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'quotes': [ 'error', 'single' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', {
      'ObjectExpression':{
        'minProperties': 1,
      },
      'ImportDeclaration': 'never',
      'ExportDeclaration': 'never',
    } ],
    'object-property-newline': [ 'error', {
      'allowAllPropertiesOnSameLine': false,
    } ],
    'comma-spacing': [ 'error', {
      'before': false,
    } ],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
