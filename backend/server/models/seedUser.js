const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/powerwatch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createTestUser() {
  const hashedPassword = await bcrypt.hash('testpassword', 10);
  const user = new User({ email: 'testuser@example.com', password: hashedPassword });

  await user.save();
  console.log('Test user created');
  mongoose.connection.close();
}

createTestUser();
