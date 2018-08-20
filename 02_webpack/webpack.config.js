var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './script.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            loader: 'babel-loader',
            exclude: /mode_modules/,
            query: {
                presets: ['env']
            }
        }]
    }
};