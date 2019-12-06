import * as Yup from 'yup';

export async function createHelpOrder(req, res, next) {
  const schema = Yup.object().shape({
    question: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Invalid parameters',
    });
  }

  return next();
}
