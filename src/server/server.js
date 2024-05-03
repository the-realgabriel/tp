const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Profile schema
const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other fields as necessary
});

const Profile = mongoose.model('Profile', profileSchema);

// Get all profiles
app.get('/api/profiles', async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));