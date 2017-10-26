import * as webpack from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import * as slsw from 'pula-serverless-webpack';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';

const tsConfigFilePath = path.resolve('tsconfig.json');
const SRC_DIR = path.resolve('src');
const BUILD_DIR = path.resolve('build');

const webpackConfig: webpack.Configuration = {
    devtool: 'source-map',
    entry: slsw.lib.entries,
    stats: 'minimal',
    output: {
        libraryTarget: 'commonjs',
        path: BUILD_DIR,
        filename: '[name].js'
    },
    target: 'node',
    externals: [
        /aws-sdk/, // Available on AWS Lambda
        nodeExternals()
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
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/**/*.html'
        }])
    ]
};

module.exports = webpackConfig;