import * as Yup from 'yup';

export async function updateStudentCommand(req, res, next) {
  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),
    age: Yup.number()
      .integer()
      .positive(),
    weight: Yup.number()
      .truncate()
      .positive(),
    height: Yup.number()
      .truncate()
      .positive(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'invalid parameters',
    });
  }

  return next();
}
