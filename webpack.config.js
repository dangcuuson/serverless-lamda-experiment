const path = require('path');
const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const tsConfigFilePath = path.resolve('tsconfig.json');
const SRC_DIR = path.resolve('src');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    externals: [
        /aws-sdk/, // Available on AWS Lambda
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: tsConfigFilePath,
                    useTranspileModule: true,
                    useCache: true
                },
                include: SRC_DIR
            }, {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configFile: path.resolve('config', 'tslint.json'),
                    // failOnHint: isDeployBuild,
                    tsConfigFile: tsConfigFilePath
                },
                include: SRC_DIR
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/**/*.html'
        }])
    ]
};