const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize data files if they don't exist
const dataFiles = ['users.json', 'courses.json', 'blog.json', 'progress.json'];
dataFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  }
});

// Load JSON data
let usersData = [];
let coursesData = [];
let blogData = [];
let progressData = [];

try {
  usersData = JSON.parse(fs.readFileSync(path.join(dataDir, 'users.json'), 'utf8'));
  coursesData = JSON.parse(fs.readFileSync(path.join(dataDir, 'courses.json'), 'utf8'));
  blogData = JSON.parse(fs.readFileSync(path.join(dataDir, 'blog.json'), 'utf8'));
  progressData = JSON.parse(fs.readFileSync(path.join(dataDir, 'progress.json'), 'utf8'));
} catch (error) {
  console.error('Error loading data files:', error);
}

// Rest of the server code remains the same...
