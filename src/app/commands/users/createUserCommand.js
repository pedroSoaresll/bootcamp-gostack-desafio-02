import * as Yup from 'yup';

export async function createUserCommand(req, res, next) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Parameters are not valid',
    });
  }

  return next();
}
