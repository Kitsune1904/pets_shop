import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlagins";
import {buildResolvers} from "./buildResolvers";
import {IBuildOptions} from "./types/types";

export function  buildWebpack(options: IBuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = options.mode === 'development';

    return {
        mode: options.mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}