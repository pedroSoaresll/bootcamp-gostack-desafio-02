import * as Yup from 'yup';

export async function updatePlans(req, res, next) {
  const schema = Yup.object().shape({
    name: Yup.string(),
    duration: Yup.number(),
    price: Yup.number(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Invalid parameters informed',
    });
  }

  return next();
}
