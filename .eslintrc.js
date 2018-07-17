module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": "off",
        "linebreak-style": "off",
        "no-unused-vars": "off",
        "no-console": "off",
        "no-extra-boolean-cast": "off",
        "semi": [
            "error",
            "always"
        ]
    }
};