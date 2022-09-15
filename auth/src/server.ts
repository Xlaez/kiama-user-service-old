import validateEnv from '@utils/validateEnv';
import app from '@routes/index.route';

validateEnv();

app.listen();
