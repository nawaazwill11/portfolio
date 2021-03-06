// require('dotenv').config()

import path from 'path'
import fs from 'fs'

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { HotModuleReplacementPlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import {
    NODE_ENV,
    WDS_PORT,
    IS_PROD,
    DEV_SERVER_PUBLIC_PATH,
    ASSET_PUBLIC_PATH,
    STATIC_PUBLIC_PATH,
    PUBLIC_PATH
} from './src/shared/config'

console.log(`WDS: Running in ${NODE_ENV} mode`)

const pages_dir = './src/client'
const file_ext = ['.ts', '.tsx']

const entry = (() => {
    return fs.readdirSync(pages_dir, 'utf-8').reduce((list, filename) => {
        const type_index = file_ext.indexOf(path.extname(filename))
        if (type_index === 0 || type_index) {
            list[path.basename(filename, file_ext[type_index])] = path.resolve(path.join(pages_dir, filename))
            return list
        }
    }, {})
})()

const htmlPlugins = (() => {
    return Object.entries(entry).map((e) => {
        const basename = e[0]
        const filename = basename + '.html'

        const titles = {
            index: 'Interactive Resume',
        }

        return new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['vendor', basename],
            filename,
            title: `${titles[basename]} - Nawaaz Kortiwala`
        })
    })
})()

const config = {
    mode: NODE_ENV,
    entry,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        // hot: true,
        port: WDS_PORT,
        publicPath: DEV_SERVER_PUBLIC_PATH,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    devtool: IS_PROD ? false : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                ["@babel/preset-env", { "targets": "> 0.2%, not dead" }],
                                ["@babel/preset-typescript", { "isTSX": true, "allExtensions": true }],
                                ["@babel/preset-react", { "runtime": "automatic" }]
                            ]
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                include: /src/,
                sideEffects: true,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: STATIC_PUBLIC_PATH,
                        }
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            url: false,
                        }
                    },
                    'sass-loader',
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // }
        ],
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'build/assets'),
        publicPath: ASSET_PUBLIC_PATH,
        crossOriginLoading: 'anonymous',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
        ...htmlPlugins,
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
        new HotModuleReplacementPlugin()
        // new BundleAnalyzerPlugin(),
    ],
    optimization: {
        // runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'all',
                    name: 'vendor',
                    enforce: true,
                }
            }
        }
    },
    // watch: IS_PROD ? true : false,
    watchOptions: {
        ignored: [
            'node_modules/**',
            'package.json',
            'src/server',
        ]
    }
}

export default config