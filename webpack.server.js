const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');
let port = 8080;

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	// compress: true,
	stats: {
		colors: true,
		hash: true,
		timings: true,
		chunks: false
	}
}).listen(port, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}

	console.log('Webpack dev server is listening at localhost:' + port);
});
