const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{ loader: 'babel-loader' }],
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
         {
            test: /\.(png|jpg|gif|svg)$/i,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 8192,
                  },
               },
            ],
         },
      ],
   },
   optimization: {
      minimize: true,
      minimizer: [

      ]
   },
   // resolve path to load modules
   resolve: {
      modules: ['src', 'node_modules'],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: './src/style.css',
      }),
      new HtmlWebPackPlugin({
         template: './src/index.html',
      }),
   ],
   devtool: 'cheap-module-eval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
   },
};


      



/* NOTES

* Webpack goes bottom-up when compiles loaders within a rule, so be careful to provide the right order

* plugins for proper build with html css and combine altogether with js into single bundle(js) file

minicssextractplugin - to reduce the size of a css bundle 



*/