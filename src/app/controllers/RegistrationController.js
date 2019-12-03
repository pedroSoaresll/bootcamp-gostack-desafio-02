import moment from 'moment';
import Plan from '../models/Plan';

class RegistrationController {
  async store(req, res) {
    const { startDate, planId } = req.body;

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

    const endDate = moment(startDate).add(plan.duration, 'month');
    const totalPrice = plan.duration * plan.price;

    // envio de email com esses dados
    // plano, data de término, valor e uma mensagem de boas-vidas.
  }
}

export default new RegistrationController();
