module.exports = {
  entry: './index.js', // エントリポイントのjsxファイル
  output: {
    filename: 'bundle.js' // 出力するファイル
  },
  module: {
    loaders: [{
      test: /\.js?$/, // 拡張子がjsで
      exclude: /node_modules/, // node_modulesフォルダ配下でなければ
      loader: 'babel-loader', // babel-loaderを使って変換する
      query: {
        plugins: ["transform-react-jsx", "babel-plugin-transform-decorators-legacy"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
      }
    }]
  }
}  