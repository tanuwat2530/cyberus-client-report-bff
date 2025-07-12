const clientRequestHistoryService = require('../services/clientRequestHistorycodeService');

exports.clientRequestHistory = async (req, res) => {
  try {
    const result = await clientRequestHistoryService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};