import Student from '../models/Student';

export async function studentExist(req, res, next) {
  const { id } = req.params;
  const student = await Student.findOne({
    where: {
      id,
    },
  });

  if (!student) {
    return res.status(400).json({
      error: 'student informed do not exist',
    });
  }

  return next();
}
