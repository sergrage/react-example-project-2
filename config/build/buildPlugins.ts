import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(pathHtml: string): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin,
        new HtmlWebpackPlugin({ template: pathHtml }),
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        })
      ]
}