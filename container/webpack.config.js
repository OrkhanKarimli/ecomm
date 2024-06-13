const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
module.exports={
 
    mode:'development',
    devServer:{
        port:'8082',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
        }),
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
              products:'products@http://localhost:8081/remoteEntry.js',
              cart:'cart@http://localhost:8083/remoteEntry.js'
            }
          })
    ]
}