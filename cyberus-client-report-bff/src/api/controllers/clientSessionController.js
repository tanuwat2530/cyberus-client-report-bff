const clientSessionService = require('../services/clientSessionService');

exports.clientSession = async (req, res) => {
  try {
    const result = await clientSessionService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};