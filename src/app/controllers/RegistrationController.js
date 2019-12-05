import moment from 'moment';
import Plan from '../models/Plan';
import Registration from '../models/Registration';
import Mail from '../../lib/Mail';
import Student from '../models/Student';

class RegistrationController {
  async store(req, res) {
    const { planId, studentId } = req.params;
    const { startDate } = req.body;

    console.log(planId, studentId, startDate);

    const plan = await Plan.findOne({
      where: {
        id: planId,
      },
    });

    console.log(plan);

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

    console.log(student);

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
}

export default new RegistrationController();
