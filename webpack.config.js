// require('dotenv').config()

const path = require('path')
const fs = require('fs')

const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

const { NODE_ENV, WDS_PORT } = process.env
const is_prod = NODE_ENV === 'production' ? true : false

console.log(is_prod)

const pages_dir = './src/client/pages'
const file_ext = ['.ts', '.tsx']

const entry = (() => {
    return fs.readdirSync(pages_dir, 'utf-8').reduce((list, filename) => {
        const type_index = file_ext.indexOf(path.extname(filename))
        if (type_index === 0 || type_index) {
            list[path.basename(filename, file_ext[type_index])] = path.resolve(`${pages_dir}/${filename}`)
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

module.exports = {
    entry,
    devServer: {
        contentBase: path.join(__dirname, 'build/assests'),
        compress: true,
        hot: true,
        port: WDS_PORT,
    },
    devtool: is_prod ? false : 'inline-source-map',
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
                // use: [
                //     {
                //         loader: 'ts-loader',
                //         options: {
                //             // configFile: './tsconfig.json', // !! WRONG
                //             configFile: path.resolve('./ts.config.json'),    // CORRECT
                //         },
                //     }
                // ],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                include: /src/,
                sideEffects: true,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'build/assets'),
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
        ...htmlPlugins,
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new HotModuleReplacementPlugin()
        // new bundleAnalyzerPlugin(),
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
    // watch: is_prod ? true : false,
    watchOptions: {
        ignored: [
            'node_modules/**',
        ]
    }
}