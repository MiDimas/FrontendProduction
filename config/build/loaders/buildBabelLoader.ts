import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}
// export function buildBabelLoader({ isDev }: BuildOptions) {
//     return {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//             loader: 'babel-loader',
//             options: {
//                 presets: ['@babel/preset-env'],
//                 plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
//             },
//         },
//     };
// }

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
    const isProd = !isDev;
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: isDev,
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid'],
                        },
                    ],
                ].filter(Boolean),
            },
        },
    };
}
