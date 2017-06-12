webpack = require 'webpack'
path = require 'path'

component_path = 'app/components/'

module.exports =
   entry: [
      'script!jquery/dist/jquery.min.js'
      'script!foundation-sites/dist/foundation.min.js'
      './app/app.cjsx'
   ]
   externals: {
      jquery: 'jQuery'
   }
   plugins: [
      new webpack.ProvidePlugin
         '$': 'jquery'
         'jQuery': 'jquery'
   ]
   output:
      path: __dirname
      filename: './public/bundle.js'
   resolve:
      root: __dirname
      alias: {
         #Format is ComponentName: 'path/to/ComponentName.coffee'
         # This allows use to just requie('ComponentName') instead of providing paths
         applicationStyles: 'app/styles/app.scss'
      }
      extensions: [
         ''
         '.js'
         '.coffee'
         '.cjsx'
      ]
   module:
      loaders: [
         loader: 'coffee-jsx-loader'
         test: /(\.coffee|\.cjsx)$/,
         exclude: /(node_modules|bower_components)/
      ]
   sassLoader:
      includePaths: [
         path.resolve(__dirname, './node_modules/foundation-sites/scss')
      ]
   devtool: 'cheap-module-eval-source-map'
