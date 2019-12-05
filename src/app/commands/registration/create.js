import * as Yup from 'yup';

export async function createRegistration(req, res, next) {
  const schema = Yup.object().shape({
    startDate: Yup.date().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Invalid parameters',
    });
  }

  return next();
}
