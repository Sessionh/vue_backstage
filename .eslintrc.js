module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
 
  "env": { 
    "es6": true,
    "browser": true,
    "commonjs": true,
    "node": true, 
  },
 
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-process-env": 'off',
    'no-console': 'off',
    "indent": [
        "error",
        2
    ],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
