const overallReportService = require('../services/overallReportService');

exports.overallReport = async (req, res) => {
  
  try {
    const result = await overallReportService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};