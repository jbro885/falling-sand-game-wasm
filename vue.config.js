const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/falling-sand-game/'
    : '/',
  configureWebpack: {
    plugins: [
      new WasmPackPlugin({
        crateDirectory: path.join(__dirname, "rust"),
        outDir: path.join(__dirname, "pkg"),
        outName: "index"
      })
    ]
  }
};
