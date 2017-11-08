const User = require('../database/models/user');
const jwt = require('jwt-simple');
const config = require('../config');

const userToken = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user._id, iat: timestamp }, config.secret);
};

exports.signin = (req, res) => {
  const { user } = req;
  return res.json({ token: userToken(user) });
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: 'You must provide a email and password' });
    next();
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.status(422).send({ error: 'Email is in use' });
      return next();
    }
  });

  const user = new User({
    email,
    password,
  });

  return (
    user
      .save()
      .then(() => res.json({ token: userToken(user) }))
      .catch(err => res.json({ error: err }))
  );
};
