/* eslint-disable quote-props */

module.exports = {
  env: {
    "es2022": true
  },
  overrides: [
    {
      "files": ["*.tsx"],
      "rules": {
        "max-len": ["warn", { "code": 160 }]
      }
    }
  ],
  rules: {
    "indent": ["off", "warn", 2],
    "no-invalid-this": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-new-object": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "prefer-object-spread": "error",
    "no-array-constructor": "error",
    "prefer-destructuring": [
      "error",
      {
        "AssignmentExpression": {
          "array": false
        }
      }
    ],
    "no-useless-concat": "error",
    "no-eval": "error",
    "no-useless-escape": "error",
    "no-loop-func": "error",
    "prefer-spread": "error",
    "prefer-rest-params": "error",
    "default-param-last": "error",
    "no-new-func": "error",
    "space-before-blocks": "error",
    "no-param-reassign": "error",
    "function-paren-newline": ["error", "multiline-arguments"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "prefer-arrow-callback": "error",
    "arrow-spacing": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed"],
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "semi": ["error", "always"],
    "no-trailing-spaces": "error",
    "max-len": [
      "warn",
      {
        "code": 80,
        "ignoreUrls": true
      }
    ],
    "consistent-return": "error",
    "no-return-assign": ["error", "always"],
    "no-extra-semi": "off",
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "object-curly-spacing": ["error", "always"]
  }
};