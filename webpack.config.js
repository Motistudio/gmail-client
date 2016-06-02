var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
// webpack.config.js
var config = {
	entry: './public/js/app.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js', //this is the default name, so you can skip it
		// at this directory our bundle file will be available
		// make sure port 8090 is used when launching webpack-dev-server
		publicPath: 'http://localhost:8080/public'
	},
	module: {
		loaders: [{
			//tell webpack to use jsx-loader for all *.jsx files
			test: /\.jsx$/,
			// exclude native modules:
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react']
			}
		}]
	},
	externals: {
		//don't bundle the 'react' npm package with our bundle.js
		//but get it from a global 'React' variable
		// 'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	target: 'electron-renderer'
};
config.target = webpackTargetElectronRenderer(config);
module.exports = config;
