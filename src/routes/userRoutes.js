const { Router } = require('express');
const controller = require('../controller/userController');
const router = Router();

router.post('/create', async (req, res) => {
  const { user, password } = req.body;
  try {
    const User = await controller.createUser(user, password);
    res.status(User.status).json(User.response);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/auth/:user/:password', async (req, res) => {
  const { user, password } = req.params;
  try {
    const auth = await controller.authUser(user, password);
    const { status, response } = auth;
    res.status(status).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/session/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const session = await controller.userSession(userId);
    res.status(session.status).json(session.response);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
