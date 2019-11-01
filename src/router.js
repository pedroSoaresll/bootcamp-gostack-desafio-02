import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import { createSessionCommand, createUserCommand } from './app/commands';

const routes = new Router();

routes.post('/sessions', createSessionCommand, SessionController.store);

routes.post('/users', createUserCommand, UserController.store);

export default routes;
