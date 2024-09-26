import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, 'secret');
  req.user = decoded;
  next();
};

export default auth;