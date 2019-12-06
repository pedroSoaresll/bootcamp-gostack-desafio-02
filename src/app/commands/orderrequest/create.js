import * as Yup from 'yup';

export async function createAnswerToOrderRequest(req, res, next) {
  const schema = Yup.object().shape({
    answer: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Invalid parameters',
    });
  }

  return next();
}
