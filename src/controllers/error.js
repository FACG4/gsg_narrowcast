exports.serverError = (err, req, res, next) => {
  res.status(500).render('error', { error: 'Server Error', text: 'Something went wrong with the server' });
};

exports.notFound = (req, res, next) => {
  res.render('error', { error: 'Page Not Found', text: 'The page you are trying to reach does not exist' });
};
