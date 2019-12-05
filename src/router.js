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
import PlanController from './app/controllers/PlanController';
// end controllers

// commands
import {
  createSessionCommand,
  createStudentCommand,
  createUserCommand,
  updateStudentCommand,
  createPlans,
  updatePlans,
  createRegistration,
} from './app/commands';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinsController from './app/controllers/CheckinsController';
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
routes.post('/students/:id/checkins', CheckinsController.store);
routes.get('/students/:studentId/checkins', CheckinsController.show);
// end students

// start plans
routes.post(
  '/plans',
  isAuth,
  extractToken,
  isValidCredentials,
  createPlans,
  PlanController.store
);
routes.get(
  '/plans',
  isAuth,
  extractToken,
  isValidCredentials,
  PlanController.show
);
routes.put(
  '/plans/:id',
  isAuth,
  extractToken,
  isValidCredentials,
  updatePlans,
  PlanController.update
);
routes.delete(
  '/plans/:id',
  isAuth,
  extractToken,
  isValidCredentials,
  PlanController.destroy
);
// end plans

// start registration
routes.post(
  '/registrations/:studentId/plan/:planId',
  isAuth,
  extractToken,
  isValidCredentials,
  createRegistration,
  RegistrationController.store
);
routes.get(
  '/registrations',
  isAuth,
  extractToken,
  isValidCredentials,
  RegistrationController.index
);
routes.delete(
  '/registrations/:id',
  isAuth,
  extractToken,
  isValidCredentials,
  RegistrationController.delete
);
// end registration

export default routes;
