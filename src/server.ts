import 'reflect-metadata';
import app from './app';
import './database';

const port = 3000;
app.listen(port, () => {
    console.info(`💿 Server started on port ${3333}!`);
});
