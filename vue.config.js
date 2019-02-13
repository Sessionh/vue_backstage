module.exports = {
 	baseUrl: '/',
  configureWebpack: {
	  devtool: 'source-map'
  },
  // devServer: {
  //   // proxy: 'http://192.168.10.107'
  //   proxy: 'http://192.168.10.92:8081/'
  // }
  devServer: {
    port: 8082,
    hot: true,
    proxy: {
      '/cgi-bin/*': {
        target: 'http://192.168.10.107/cgi-bin',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/cgi-bin': ''
        }
      },
      '/api/*': {
        target: 'http://192.168.10.5:8086/api/',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
    // proxy: {
    //   '/*': {
    //     target: 'http://192.168.10.5:8086/',
    //     // ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   },
    // },
    // proxyTable: {
    //   ’/api’:{
    //   target:‘https://test.api.com 47’,
    //   logLevel: ‘debug’,
    //   changeOrigin: true
    //   }
  },
}