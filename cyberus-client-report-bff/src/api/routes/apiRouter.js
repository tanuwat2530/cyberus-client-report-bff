const express = require('express');
const router = express.Router();
const clientLoginController = require('../controllers/clientLoginController');
const chartReportController = require('../controllers/chartReportController');
const clientShortcodeController = require('../controllers/clientShortcodeController');
const clientSessionController = require('../controllers/clientSessionController');


router.post('/client-report-login', clientLoginController.loginUser);
router.post('/client-report-session', clientSessionController.clientSession);
router.post('/client-report-line-chart', chartReportController.chartReport);
router.post('/client-report-shortcode-client', clientShortcodeController.clientShortcode);


module.exports = router;