const express = require('express');
const router = express.Router();
const clientLoginController = require('../controllers/clientLoginController');
const chartReportController = require('../controllers/chartReportController');
const overallReportController = require('../controllers/overallReportController');
const clientShortcodeController = require('../controllers/clientShortcodeController');
const clientSessionController = require('../controllers/clientSessionController');
const clientRequestHistoryController = require('../controllers/clientRequestHistoryController');


router.post('/report-login', clientLoginController.loginUser);
router.post('/report-session', clientSessionController.clientSession);
router.post('/report-line-chart', chartReportController.chartReport);
router.post('/report-overall-pie', overallReportController.overallReport);
router.post('/report-shortcode-client', clientShortcodeController.clientShortcode);
router.post('/report-request-history', clientRequestHistoryController.clientRequestHistory);


module.exports = router;