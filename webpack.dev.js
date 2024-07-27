import { merge } from "webpack-merge";
const common = await import("./webpack.common.js");
export default merge(common.default, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
    port: 3000,
    open: true,
  },
});
