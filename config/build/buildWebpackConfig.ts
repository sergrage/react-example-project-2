import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import { BuildOptions } from "./type/config";
import webpack from 'webpack';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = options;

    return {
        mode: mode, // mopde dev - prod
        entry: paths.entry,
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(paths.html, isDev),
        devtool: isDev ? 'inline-source-map' : undefined, // чтоб webpack показывал в каком файле ошибка. для этого он будет делать map файлы
        output: {
          filename: '[name].[contenthash].js', // имя - main (по умолчанию) + hash - для обновления браузером
          path: paths.build,
          clean: true // чистить папку сборки
        },
        devServer: isDev ? buildDevServer(options) : undefined
      }
}