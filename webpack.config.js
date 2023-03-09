const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[fullhash].js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        // contentBase: 'dist',
        open: true,
        compress: true,
        hot: true,
        liveReload: true,
        watchFiles: ["*.html", "src/styles/*.scss", "src/styles/*.css"],
        compress: true,
        port: 3000,
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                // include: path.resolve(__dirname, 'src/styles/styles.css'),
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                rules: [{
                    test: /\.(woff2?|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                }, ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            // {
            //     test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
            //     use: [{
            //         loader: 'file-loader?name=assets/fonts/[name].[ext]',
            //     }, ],
            // },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: '**/*',
        //         context: path.resolve(__dirname, 'src', 'assets'),
        //         to: './assets',
        //     }, ],
        // }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'style-[fullhash].css',
        }),
    ],
};