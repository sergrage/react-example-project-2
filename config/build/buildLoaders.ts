import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './type/config';
export function buildLoaders(options :BuildOptions): webpack.RuleSetRule[] {

    const typescripotLoader = {
        test: /\.tsx?$/, // ts + tsx
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    const scssModuleLoader =  {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => resPath.includes('.module.'),
              namedExport: false,
              exportLocalsConvention: 'as-is',
              localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },

          },
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }  

    return [typescripotLoader, scssModuleLoader];
}