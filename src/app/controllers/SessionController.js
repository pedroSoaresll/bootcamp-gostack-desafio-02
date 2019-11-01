import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Parameters invalid',
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: 'user not found with this email',
      });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({
        message: 'password does not match',
      });
    }

    const token = jwt.sign(
      {
        sub: user.id,
      },
      'iron_man'
    );

    return res.json({
      token,
    });
  }
}

export default new SessionController();
