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
}

export default new UserController();
