import { createConnection } from 'typeorm';

createConnection().then(() => {
    console.info('📦 Successfully connected with database');
});
