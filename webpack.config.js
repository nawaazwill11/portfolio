require('dotenv').config()
const path = require('path')
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

const { NODE_ENV, WDS_PORT } = process.env
const is_prod = NODE_ENV === 'production' ? true : false

module.exports = {
    entry: './src/index.tsx',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: WDS_PORT,
    },
    devtool: is_prod ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
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
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    output: {
        filename: '[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: is_prod ? '/static' : `http://localhost:${WDS_PORT}`
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: is_prod ? true : false }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            publicPath: './'
        }),
        new MiniCssExtractPlugin({
            filename: "[contenthash].css",
            chunkFilename: "[id].css"
        }),
        new HotModuleReplacementPlugin()
        // new bundleAnalyzerPlugin(),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
    watch: is_prod ? true : false,
    watchOptions: {
        ignored: [
            'node_modules/**',
        ]
    }
}