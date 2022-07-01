// Baseado no course bloco 23
const error = (err, req, res, _next) => {
  console.log(' -->', err);
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  if (
    err.isJoi
    && (err.details[0].type.includes('.min'))
  ) {
    // console.log('-->',err.details[0]);
    res.status(422).json({ message: err.message });
  } else {
    res.status(400).json({ message: err.message });
  }
};

module.exports = error;