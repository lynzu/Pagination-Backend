const ValidatorHandler = (req, res, next, type = 'query', schema) => {
  const { error } = schema.validate(type == 'body' ? req.body : req.query);
  if (error) {
    return res.status(400).json({
      status: false,
      message: error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, '')
    });
  }
  next();
};

export default ValidatorHandler;
