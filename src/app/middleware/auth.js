import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/authentication';
import User from '../models/User';

export async function isAuth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({
      error: 'You need a token to access this endpoint',
    });
  }

  if (!authorization.includes('Bearer')) {
    res.status(401).json({
      error: 'The token passed is not valid',
    });
  }

  next();
}

export async function extractToken(req, res, next) {
  let { authorization } = req.headers;
  authorization = authorization.replace('Bearer ', '');

  try {
    const token = jwt.verify(authorization, JWT_SECRET);

    req.auth = {
      ...token,
    };

    next();
  } catch (e) {
    res.status(401).json({
      error: e.message,
    });
  }
}

export async function isValidCredentials(req, res, next) {
  const { sub } = req.auth;
  const user = await User.findByPk(sub);

  if (!user) {
    res.status(401).json({
      error: 'credentials is not valid',
    });
  }

  next();
}
