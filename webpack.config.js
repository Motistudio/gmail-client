var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// var nodeModules = {};
// fs.readdirSync('node_modules')
//   .filter(function(x) {
//     return !['.bin'].contains(x);
//   })
//   .forEach(function(mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
//   });
// var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
// webpack.config.js
var config = {
	entry: './public/js/app.js',
	// entry: './index.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js', //this is the default name, so you can skip it
		// at this directory our bundle file will be available
		// make sure port 8090 is used when launching webpack-dev-server
		publicPath: 'http://localhost:8080/public'
	},
	//externals: nodeModules,
	module: {
		loaders: [{
			//tell webpack to use jsx-loader for all *.jsx files
			test: /\.jsx$/,
			// exclude native modules:
			loader: 'babel',
			query: {
				presets: ['react']
			},
      externals: [
        {
          'App': true
        },
        /^[a-z\-0-9]+$/,
        /node_modules/
      ],
      exclude: /node_modules/
		}]
	},
	// externals: {
	// 	//don't bundle the 'react' npm package with our bundle.js
	// 	//but get it from a global 'React' variable
	// 	// 'react': 'React'
	// },
	resolve: {
		alias: {
			'App': __dirname + '/App',
			'store': __dirname + '/store'
		},
		extensions: ['', '.js', '.jsx']
	},
	target: 'electron'
};
// config.target = webpackTargetElectronRenderer(config);
module.exports = config;
