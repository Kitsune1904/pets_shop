import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/types";

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env',
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-react',
                        {
                            runtime: isDev ? 'automatic' : 'classic',
                        }
                    ]
                ]
            }
        }
    }

    const cssLoaderPlsModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[name]__[local]" : "[hash:base64:8]"
            },
        }
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderPlsModules,
            "sass-loader",
        ],
    }

    const imagesLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ],
    };

    return [scssLoader, babelLoader, imagesLoader, svgrLoader]
}