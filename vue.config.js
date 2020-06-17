const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
//pluginOptions: {
//  'style-resources-loader': {
//    preProcessor: 'sass',
//    patterns: [
//      path.resolve(__dirname, './src/assets/styles/*.scss')      //你的.scss文件所在目录
//    ]
//  }
//},
  configureWebpack:{
    externals: {
      'vue': 'Vue',
      'element-ui': 'ElementUI',
      'axios': 'axios',
      'echarts': 'echarts',
      'vue-router': 'VueRouter'
    },
    plugins: [
    	new CompressionWebpackPlugin({
    		filename: '[path].gz[query]',
    		algorithm: 'gzip',
    		test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    		threshold: 10240,
    		minRatio: 0.8
    	}),
    	new UglifyJsPlugin({
    		uglifyOptions: {
    			compress: {
//  				warnings: false, // 若打包错误，则注释这行
    				drop_debugger: true,
    				drop_console: true,
    				pure_funcs: ["console.log"]
    			}
    		},
    		sourceMap: false,
    		parallel: true
    	})
    ]
  },
	productionSourceMap: false
}