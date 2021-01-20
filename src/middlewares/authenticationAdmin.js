const adminController = require('../controllers/adminController');

function authAdminMiddleware(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).send({ error: 'Auth Header not found' });

  const requestToken = authHeader.replace('Bearer ', '');

  if (requestToken !== adminController.getToken()) return res.status(401).send({ error: 'Invalid token' });

  next();
  return 'zape';
}

module.exports = authAdminMiddleware;
