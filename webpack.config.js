const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{ loader: "babel-loader"}]
         },
         {
            test:/\.css$/,
            use: ['css-loader']
         },
         {
            test: /\.(png|jpg|gif|svg)$/i,
            use: [{
               loader: 'url-loader',
               options: {
                  limit: 8192,
               },
            },],
         }
      ]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'dist')
   }
};
      





// plugins: [
//    new HtmlWebPackPlugin({
//       template: "./src/index.html",
//       filename: "./index.html"
//    })
// ]