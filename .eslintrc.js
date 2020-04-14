export const env = {
  browser: true,
  es6: true,
  node: true,
  jest: true
};
export const extends = ['airbnb-base'];
export const globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly'
};
export const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
};
export const rules = {
  'comma-dangle': ['error', 'never'],
  'no-param-reassign': ['error', { props: false }]
};
