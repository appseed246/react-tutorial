const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development', // 開発モード
  devtool: 'cheap-module-source-map', // ソースマップファイル追加 
  name: 'bundle',
  entry: [
    '@babel/polyfill', // 古いブラウザへの互換性をもたせる
    'react-hot-loader/patch',
    __dirname + '/index', // エントリポイントのjsxファイル
  ],
  // React Hot Loader用のデバッグサーバ(webpack-dev-server)の設定
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname, // index.htmlの格納場所
    inline: true, // ソース変更時リロードモード
    hot: true, // HMR(Hot Module Reload)モード
    port: 7070, // 起動ポート
  },
  output: {
    // publicPath: '/dist', // distフォルダ以下を公開パスに指定
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 名前変更無効プラグイン利用
    new webpack.HotModuleReplacementPlugin() // HMR(Hot Module Reload)プラグイン利用 
  ],
  module: {
    rules: [{
      test: /\.js?$/, // 拡張子がjsで
      exclude: /node_modules/, // node_modulesフォルダ配下は除外
      include: __dirname,// client配下のJSファイルが対象
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { 'legacy': true }], // decorator用
            ['@babel/plugin-proposal-class-properties', { loose: true }], // クラスのdefaultProps、アローファンクション用
            'react-hot-loader/babel', // react-hot-loader用
          ],
        },
      },
    }]
  }
}