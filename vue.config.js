module.exports = {
    devServer: {
      port : 8080,
      open: true,
      proxy:{
          '/api':{
            // target:"http://47.101.222.54:3000",
            target:'http://47.101.222.54:3333',
            changeOrigin:true,
            ws:false
          }
      }
   }
}
