module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        describe: true,
        it: true,
        expect: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
