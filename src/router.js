import { Router } from 'express';

// middlewares
import {
  isAuth,
  extractToken,
  isValidCredentials,
} from './app/middleware/auth';
import { studentExist } from './app/middleware/student';
// end middlewares

// controllers
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
// end controllers

// commands
import {
  createSessionCommand,
  createStudentCommand,
  createUserCommand,
  updateStudentCommand,
} from './app/commands';
// end commands

const routes = new Router();

// start sesssion
routes.post('/sessions', createSessionCommand, SessionController.store);
// end session

// start users
routes.post('/users', createUserCommand, UserController.store);
routes.get(
  '/users',
  isAuth,
  extractToken,
  isValidCredentials,
  UserController.index
);
// end users

// start students
routes.post(
  '/students',
  isAuth,
  extractToken,
  isValidCredentials,
  createStudentCommand,
  StudentController.store
);
routes.put(
  '/students/:id',
  isAuth,
  extractToken,
  isValidCredentials,
  studentExist,
  updateStudentCommand,
  StudentController.update
);
routes.get(
  '/students',
  isAuth,
  extractToken,
  isValidCredentials,
  StudentController.index
);
// end students

export default routes;
