const express = require('express');
const { getReports, addReport } = require('../controllers/reportsController');

const router = express.Router();

// GET: Fetch all reports
router.get('/', getReports);

// POST: Add a new report
router.post('/', addReport);

module.exports = router;
