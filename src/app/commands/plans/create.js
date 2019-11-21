import * as Yup from 'yup';

export async function createPlans(req, res, next) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    duration: Yup.number().required(),
    price: Yup.number().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Invalid parameters informed',
    });
  }

  return next();
}
