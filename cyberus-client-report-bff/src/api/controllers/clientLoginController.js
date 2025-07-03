const loginService = require('../services/clientLoginService');

exports.loginUser = async (req, res) => {
  try {
    const result = await loginService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};