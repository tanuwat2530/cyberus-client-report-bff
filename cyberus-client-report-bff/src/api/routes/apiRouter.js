const express = require('express');
const router = express.Router();
const clientLoginController = require('../controllers/clientLoginController');
const chartReportController = require('../controllers/chartReportController');
const clientShortcodeController = require('../controllers/clientShortcodeController');
const clientSessionController = require('../controllers/clientSessionController');


router.post('/report-login', clientLoginController.loginUser);
router.post('/report-session', clientSessionController.clientSession);
router.post('/report-line-chart', chartReportController.chartReport);
router.post('/report-shortcode-client', clientShortcodeController.clientShortcode);


module.exports = router;