import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import csswring from 'csswring';
import autoprefixer from 'autoprefixer-core';

// for Bourbon & Neat to be added to style loader below
import bourbon from 'node-bourbon';
import neat from 'node-neat';
var bourbonNeatPaths = (a, b) => {
    return '?includePaths[]=' + encodeURIComponent(a.includePaths) +
        '&includePaths[]=' + encodeURIComponent(b.includePaths[1])
}

const CLIENT_DIR = path.resolve(__dirname, 'app');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');

const aliases = {
    components: path.resolve(CLIENT_DIR, 'components'),
    containers: path.resolve(CLIENT_DIR, 'containers'),
    reducers: path.resolve(CLIENT_DIR, 'reducers'),
    actions: path.resolve(CLIENT_DIR, 'actions')
};

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || false))
});

const config = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        devFlagPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css')
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, './app/stylesheets')]
    },
    postcss: [autoprefixer, csswring],
    resolve: { alias: aliases,
               root: [
                   path.resolve('./app/redux/modules')]},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: CLIENT_DIR
        },
        {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass' + bourbonNeatPaths(bourbon, neat)
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },


        {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
            // loader: "url?limit=10000"
            loader: "url"
        },
        {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            loader: 'file'
        }
    ]
}
};

export default config;
