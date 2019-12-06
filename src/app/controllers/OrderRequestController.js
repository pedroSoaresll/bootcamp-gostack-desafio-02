import { Op } from 'sequelize';
import HelpOrder from '../models/HelpOrder';
import Mail from '../../lib/Mail';
import Student from '../models/Student';

class OrderRequestController {
  async index(req, res) {
    const requestOrderWithoutAnswer = await HelpOrder.findAll({
      where: {
        answer: {
          [Op.eq]: null,
        },
      },
    });

    return res.json(requestOrderWithoutAnswer);
  }

  async store(req, res) {
    const { id } = req.params;
    const { answer } = req.body;

    const orderRequest = await HelpOrder.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Student,
          as: 'student',
        },
      ],
    });

    if (!orderRequest) {
      return res.status(401).json({
        error: 'Order request not found',
      });
    }

    await orderRequest.update({
      answer,
      answer_at: new Date(),
    });

    await Mail.sendMail({
      to: `${orderRequest.student.name} <${orderRequest.student.email}>`,
      subject: 'Sua pergunta foi respondida!',
      template: 'helporder-answered',
      context: {
        student: orderRequest.student.name,
        question: orderRequest.question,
        answer,
      },
    });

    return res.json(orderRequest);
  }
}

export default new OrderRequestController();
