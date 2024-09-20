import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../type/config';

export function buildCssLoader(isDev:boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => resPath.includes('.module.'),
                namedExport: false,
                exportLocalsConvention: 'as-is',
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
              },
  
            },
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      } 
}