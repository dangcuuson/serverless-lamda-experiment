import * as webpack from 'webpack';
import * as path from 'path';

const slsw = require('serverless-webpack');

const tsConfigFilePath = path.resolve('tsconfig.json');
const SRC_DIR = path.resolve('src');

const webpackConfig: webpack.Configuration = {
    entry: 'asdasdasd',
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
                    configFile: path.resolve(__dirname, 'tslint.json'),
                    // failOnHint: isDeployBuild,
                    tsConfigFile: tsConfigFilePath
                },
                include: SRC_DIR
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '']
    }
}

module.exports = webpackConfig;