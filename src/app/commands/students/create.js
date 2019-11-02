import * as Yup from 'yup';

export async function createStudentCommand(req, res, next) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    age: Yup.number()
      .integer()
      .positive()
      .required(),
    weight: Yup.number()
      .truncate()
      .positive()
      .required(),
    height: Yup.number()
      .truncate()
      .positive()
      .required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'invalid parameters',
    });
  }

  return next();
}
