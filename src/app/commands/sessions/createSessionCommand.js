import * as Yup from 'yup';

export async function createSessionCommand(req, res, next) {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Parameters invalid',
    });
  }

  return next();
}
