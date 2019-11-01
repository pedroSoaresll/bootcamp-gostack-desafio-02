import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Parameters are not valid',
      });
    }

    const { id, name, email, createdAt } = await User.create({ ...req.body });

    return res.json({
      id,
      name,
      email,
      createdAt,
    });
  }
}

export default new UserController();
