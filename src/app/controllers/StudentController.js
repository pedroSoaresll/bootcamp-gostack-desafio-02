import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const student = await Student.create({ ...req.body });
    return res.json(student);
  }

  async index(_, res) {
    return res.json(await Student.findAll());
  }

  async update(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    student.update({ ...req.body });

    return res.json(student);
  }
}

export default new StudentController();
