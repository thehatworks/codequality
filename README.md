# @thehatworks/codequality

## Personally curated collection of eslint configuration settings and others

If you wanna code like me.. it's pretty easy! I have exposed my defaults for the various JS environments that I use
(This can be considered a code-is-documentation version of our coding guidelines, until further notice...)


* [Usage](#how-to-use-in-your-own-projects)

## How to use in your own projects

    $ npm install --save-dev @thehatworks/codequality
    $ touch .eslintrc.js

Now open your new `.eslintrc.js` in your favorite text-editor and type in

    module.exports = {
        "extends": [
            "@thehatworks/codequality"
        ]
    };
