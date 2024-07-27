import { merge } from "webpack-merge";
const common = await import("./webpack.common.js");
export default merge(common.default, {
  mode: "production",
  devtool: "source-map",
});
