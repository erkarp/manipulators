var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		"main": "./index.js",
		"test": "./spec/test.js"
	},
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};