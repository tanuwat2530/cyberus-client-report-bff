const clientShortcodeService = require('../services/clientShortcodeService');

exports.clientShortcode = async (req, res) => {
  try {
    const result = await clientShortcodeService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};