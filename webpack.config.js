const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => {
	const isDevelopment = argv.mode === "development";

	return {
		entry: "./src/styles.css",

		output: {
			path: path.resolve(__dirname, "build"),
			filename: isDevelopment ? "bundle.js" : "[name].[contenthash].js",
			clean: true,
			assetModuleFilename: "assets/[name].[ext]",
		},

		module: {
			rules: [
				{
					test: /\.css$/,
					use: [isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader",
							options: {
								sources: {
									list: [
										{
											tag: "img",
											attribute: "src",
											type: "src",
										},
									],
								},
							},
						},
					],
				},
				{
					test: /\.(png|jpe?g|gif|svg|ico)$/i,
					type: "asset/resource",
					generator: {
						filename: (pathData) => {
							const dirname = path.dirname(pathData.filename).replace("src/", "");
							return `${dirname}/[name][ext]`;
						},
					},
				},
				{
					test: /\.ttf$/i,
					type: "asset/resource",
					generator: {
						filename: "assets/fonts/Outfit/[name][ext]",
					},
				},
			],
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				filename: "index.html",
				favicon: "./src/assets/images/favicon-32x32.png",
				minify: !isDevelopment,
			}),
			new MiniCssExtractPlugin({
				filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
			}),
		],

		devtool: isDevelopment ? "eval-source-map" : "source-map",

		devServer: {
			static: {
				directory: path.join(__dirname, "build"),
			},
			compress: true,
			port: 9000,
			open: true,
		},
	};
};
