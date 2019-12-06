import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async store(req, res) {
    const { id } = req.params;
    const { question } = req.body;

    const helporder = await HelpOrder.create({
      student_id: id,
      question,
    });

    return res.json(helporder);
  }

  async show(req, res) {
    const { id } = req.params;

    const helporders = await HelpOrder.findAll({
      where: {
        student_id: id,
      },
    });

    return res.json(helporders);
  }
}

export default new HelpOrderController();
