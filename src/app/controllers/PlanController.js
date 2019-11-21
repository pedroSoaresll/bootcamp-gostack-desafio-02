import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const plan = await Plan.create(req.body);
    return res.json(plan);
  }

  async show(_, res) {
    const plan = await Plan.findAll();
    return res.json(plan);
  }

  async update(req, res) {
    const { id } = req.params;

    const plan = await Plan.findOne({
      where: {
        id,
      },
    });

    if (!plan) {
      return res.status(400).json({
        error: 'The plan informed not exists',
      });
    }

    await plan.update(req.body);

    return res.json(plan);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const plan = await Plan.findOne({
      where: {
        id,
      },
    });

    if (!plan) {
      return res.status(400).json({
        error: 'The plan informed not exists',
      });
    }

    await plan.destroy();

    return res.status(200).json({
      message: 'The plan was deleted',
      data: plan,
    });
  }
}

export default new PlanController();
