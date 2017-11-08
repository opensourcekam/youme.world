const auth = require('../controllers/auth');
const requireAuth = require('../middlewares').requireAuth;
const requireSignin = require('../middlewares').requireSignin;

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => res.json({ whats: 'up' }));
  app.post('/x', requireAuth, (req, res) => res.json({ whats: 'up' }));
  
  app.post('/signin', requireSignin, auth.signin);
  app.post('/signup', auth.signup);
};
