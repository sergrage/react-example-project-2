import { ResolveOptions } from "webpack";
import { BuildOptions } from "./type/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
       preferAbsolute: true,
       modules: [options.paths.src, 'node_modules'],
       mainFiles: ['index'],
       alias: {},
       extensions: ['.tsx', '.ts', '.js'], // для этих файлов не указывается расширение при import
      }
}