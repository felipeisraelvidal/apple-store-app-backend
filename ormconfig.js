const nodeEnv = process.env.NODE_ENV || 'development';

const commonConfig = {
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    cli: {
        entitiesDir: 'dist/entities',
    }
}

module.exports = {
    development: {
        ...commonConfig,
        logging: true,
        entities: ['src/entities/**/*.ts']
    },
    staging: {
        ...commonConfig,
        logging: true,
        entities: ['dist/entities/**/*.js']
    },
    production: {
        ...commonConfig,
        logging: false,
        entities: ['dist/entities/**/*.js']
    }
}[nodeEnv];
