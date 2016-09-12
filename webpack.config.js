/* © 2016 NauStud.io
 * @author Thanh Tran
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		app: [
			'webpack/hot/only-dev-server',
			'./js/index.js',
		],
		client: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080',
		],
		vendor: [
			'react',
			'react-dom',
			'redux',
			'expect',
		],
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].js',
		publicPath : '/static/',
	},
	resolve: {
		root: [ __dirname ]
	},
	module: {
		loaders: [
			// { test: /\.css$/, loader: "style!css" }
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				include: __dirname,
			}
		]

	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filname: 'vendor.js'
		}),
	]

};
