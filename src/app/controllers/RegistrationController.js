import moment from 'moment';
import Plan from '../models/Plan';
import Registration from '../models/Registration';
import Mail from '../../lib/Mail';
import Student from '../models/Student';

class RegistrationController {
  async store(req, res) {
    const { planId, studentId } = req.params;
    const { startDate } = req.body;

    const plan = await Plan.findOne({
      where: {
        id: planId,
      },
    });

    if (!plan) {
      return res.status(400).json({
        error: 'Selected plan not found',
      });
    }

    const student = await Student.findOne({
      where: {
        id: studentId,
      },
    });

    if (!student) {
      return res.status(400).json({
        error: 'Student informed not found',
      });
    }

    const endDate = moment(startDate).add(plan.duration, 'month');
    const totalPrice = plan.duration * plan.price;

    await Registration.create({
      start_date: startDate,
      end_date: endDate,
      student_id: studentId,
      plan_id: plan.id,
      price: totalPrice,
    });

    // envio de email com esses dados
    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Boas vindas meu caro',
      template: 'congratulation-register',
      context: {
        student: student.name,
        plan: plan.name,
        startDate,
        endDate,
        totalPrice,
      },
    });

    return res.json({
      message: 'Success, a new student created',
    });
  }

  async index(_, res) {
    const registration = await Registration.findAll();
    return res.json(registration);
  }

  async delete(req, res) {
    const { id } = req.params;
    const registration = await Registration.destroy({
      where: {
        id,
      },
    });

    const message = registration
      ? 'Deletado com sucesso'
      : 'Nenhum registro deletado';

    return res.json({
      message,
    });
  }
}

export default new RegistrationController();
