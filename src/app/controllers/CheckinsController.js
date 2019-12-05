import { Op } from 'sequelize';
import moment from 'moment';
import Student from '../models/Student';
import Checkin from '../models/Checkin';

class CheckinsController {
  async store(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(401).json({
        error: 'student not found',
      });
    }

    // pegar todos os checkins existentes do aluno com um between entre a data de hoje + 7 dias
    const dateFormat = 'YYYY-MM-DD';
    const today = moment().format(dateFormat);
    const afterSevenDays = moment()
      .add(7, 'd')
      .format(dateFormat);

    const checkins = await Checkin.findAll({
      where: {
        created_at: {
          [Op.between]: [today, afterSevenDays],
        },
      },
    });

    const countCheckins = checkins.length;
    const limitCheckins = 5;

    if (countCheckins > limitCheckins) {
      return res.status(401).json({
        error: 'limit of checkins achieved',
      });
    }

    await Checkin.create({
      student_id: student.id,
    });

    return res.json(checkins);
  }

  async show(req, res) {
    const { studentId } = req.params;

    const checkin = await Checkin.findAll({
      where: {
        student_id: studentId,
      },
    });

    return res.json(checkin);
  }
}

export default new CheckinsController();
