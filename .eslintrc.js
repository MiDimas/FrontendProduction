module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'midi-plugin-import',
        'unused-imports',
    ],
    ignorePatterns: ['./node_modules/'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            2,
            {
                markupOnly: true,
                ignoreAttribute: [
                    'to',
                    'data-testid',
                    'target',
                    'direction',
                    'justify',
                    'align',
                    'gap',
                    'role',
                    'border',
                    'as',
                    'feature',
                    'color',
                    'variant',
                    'borderForm'
                ],
            },
        ],
        'max-len': [2, { code: 120, ignoreComments: true }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'unused-imports/no-unused-imports': 'error',
        'midi-plugin-import/path-check': [2, { aliasAbsolutePath: '@' }],
        'midi-plugin-import/public-api-imports': [
            2,
            {
                aliasAbsolutePath: '@',
                testFilePatterns: [
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    '**/*.stories.ts',
                    '**/*.stories.tsx',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'midi-plugin-import/layer-imports': [
            2,
            {
                aliasAbsolutePath: '@',
                ignorePatterns: ['**/StoreProvider', '**/testing', '**/ScrollRestore'],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': [0],
            },
        },
    ],
};
