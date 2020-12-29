const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname, 'static_src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'app.js',
    },
    devServer: {
        overlay : true,
        open: true,
    },
    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]
                }
            },
        ],
    },
};