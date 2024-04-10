import { BuildOptions } from '../types/config';

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
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
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
                ].filter(Boolean),
            },
        },
    };
}
