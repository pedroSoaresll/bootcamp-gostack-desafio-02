import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name, email, createdAt } = await User.create({ ...req.body });

    return res.json({
      id,
      name,
      email,
      createdAt,
    });
  }

  async index(_, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}

export default new UserController();
