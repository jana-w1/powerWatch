const Report = require('../models/Report');

// Fetch all reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new report
const addReport = async (req, res) => {
  const { username, status, location } = req.body;
  try {
    const newReport = new Report({ username, status, location });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getReports, addReport };
