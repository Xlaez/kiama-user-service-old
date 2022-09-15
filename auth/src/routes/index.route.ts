import App from '@/app';
import AuthRoute from '@routes/auth.route';
import InitialRoute from '@/routes/initial.route';
import UsersRoute from '@routes/users.route';


const app = new App([new InitialRoute(), new UsersRoute(), new AuthRoute()]);

export default app;