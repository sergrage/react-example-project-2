import { BuildOptions } from "./type/config";

import type { Configuration as DevServerConfigurations } from "webpack-dev-server";

export function buildDevServer (options: BuildOptions): DevServerConfigurations {
    return {
        port: options.port,
        open: true, // автоматом открывать старницу приложения
        historyApiFallback: true, // чтобы при вводе в поиск ссылки на страницу она открывалась, т.е. чтоб было поведение как у SPA.
        hot: true // при изменении коде - сервер не будет перегружать страницу HotModuleReplacementPlugin
    }
}