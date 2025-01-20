const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const User = require('./models/User'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/powerwatch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sign-In Endpoint
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    res.json({ success: true, message: 'Sign In successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:5000');
});
