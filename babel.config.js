module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@config': './src/config',
                '@controllers': './src/controllers',
                '@models': './src/models',
                '@useCases': './src/use_cases',
                '@errors': './src/errors',
                '@infra': './src/infra',
                '@utils': './src/utils',
                '@middlewares': './src/middlewares',
                '@entities': './src/entities',
                '@dtos': './src/dtos',
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
};
