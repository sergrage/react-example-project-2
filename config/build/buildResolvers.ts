import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // для этих файлов не указывается расширение при import
      }
}