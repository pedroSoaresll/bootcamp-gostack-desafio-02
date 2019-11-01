import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
  async store(req, res) {
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
