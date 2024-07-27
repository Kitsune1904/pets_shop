import path from 'path';
import webpack from 'webpack';
import {buildWebpack} from './config/build/buildWebpack'
import {BuildMode, IBuildOptions, IBuildPaths} from "./config/build/types/types";

interface IEnvVars {
    mode: BuildMode;
    port: number;
}

export default (env: IEnvVars) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'docs'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public')
    }
    const options: IBuildOptions = {
        port: env.port ?? 3000,
        paths,
        mode: env.mode ?? 'development'
    }
    const config: webpack.Configuration = buildWebpack(options);
    return config
};