import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {IBuildOptions} from "./types/types";

export function buildDevServer(options: IBuildOptions):DevServerConfiguration {
    return {
        port: options.port ?? 5000,
        open: true,
        historyApiFallback: true
    }
}