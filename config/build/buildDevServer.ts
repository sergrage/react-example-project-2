import { BuildOptions } from "./type/config";

import type { Configuration as DevServerConfigurations } from "webpack-dev-server";

export function buildDevServer (options: BuildOptions): DevServerConfigurations {
    return {
        port: options.port,
        open: true, // автоматом открывать старницу приложения
    }
}