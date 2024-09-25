import webpack, { RuleSetRule } from "webpack";
import { BuildPaths } from "../build/type/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({config}): {config: webpack.Configuration} => {
    const paths : BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return rule;
    })

    config.module.rules.push(buildCssLoader(true))
    config.module.rules.push(buildSvgLoader())

    config.plugins.push( new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }))

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true
        })
    );
    return config;
}