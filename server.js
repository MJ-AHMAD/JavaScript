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

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Initialize data files if they don't exist
const dataFiles = ['users.json', 'courses.json', 'blog.json', 'progress.json'];
dataFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
    console.log(`Created empty ${file} file`);
  }
});

// Load JSON data with error handling
function loadJsonData(filename) {
  try {
    const filePath = path.join(__dirname, 'data', filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error.message);
    return [];
  }
}

// Load data
const usersData = loadJsonData('users.json');
const coursesData = loadJsonData('courses.json');
const blogData = loadJsonData('blog.json');
const progressData = loadJsonData('progress.json');

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to JavaScript Mastery API',
    version: '1.0.0',
    endpoints: [
      '/api/users',
      '/api/courses',
      '/api/blog',
      '/api/progress',
    ]
  });
});

// API Routes
// Users
app.get('/api/users', (req, res) => {
  res.json(usersData);
});

app.get('/api/users/:id', (req, res) => {
  const user = usersData.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const newUser = {
    id: usersData.length + 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  
  usersData.push(newUser);
  
  // Save to file (in a production app, you'd use a database)
  fs.writeFileSync(
    path.join(__dirname, 'data', 'users.json'), 
    JSON.stringify(usersData, null, 2)
  );
  
  res.status(201).json(newUser);
});

// Courses
app.get('/api/courses', (req, res) => {
  res.json(coursesData);
});

app.get('/api/courses/:id', (req, res) => {
  const course = coursesData.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
});

app.post('/api/courses', (req, res) => {
  const newCourse = {
    id: coursesData.length + 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  
  coursesData.push(newCourse);
  
  fs.writeFileSync(
    path.join(__dirname, 'data', 'courses.json'), 
    JSON.stringify(coursesData, null, 2)
  );
  
  res.status(201).json(newCourse);
});

// Blog
app.get('/api/blog', (req, res) => {
  res.json(blogData);
});

app.get('/api/blog/:id', (req, res) => {
  const article = blogData.find(article => article.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ message: 'Article not found' });
  res.json(article);
});

app.post('/api/blog', (req, res) => {
  const newArticle = {
    id: blogData.length + 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  
  blogData.push(newArticle);
  
  fs.writeFileSync(
    path.join(__dirname, 'data', 'blog.json'), 
    JSON.stringify(blogData, null, 2)
  );
  
  res.status(201).json(newArticle);
});

// Progress
app.get('/api/progress', (req, res) => {
  res.json(progressData);
});

app.get('/api/progress/:userId', (req, res) => {
  const userProgress = progressData.find(progress => progress.userId === parseInt(req.params.userId));
  if (!userProgress) return res.status(404).json({ message: 'Progress not found' });
  res.json(userProgress);
});

app.post('/api/progress', (req, res) => {
  const newProgress = {
    id: progressData.length + 1,
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  
  progressData.push(newProgress);
  
  fs.writeFileSync(
    path.join(__dirname, 'data', 'progress.json'), 
    JSON.stringify(progressData, null, 2)
  );
  
  res.status(201).json(newProgress);
});

app.put('/api/progress/:userId', (req, res) => {
  const index = progressData.findIndex(progress => progress.userId === parseInt(req.params.userId));
  if (index === -1) return res.status(404).json({ message: 'Progress not found' });
  
  progressData[index] = {
    ...progressData[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(__dirname, 'data', 'progress.json'), 
    JSON.stringify(progressData, null, 2)
  );
  
  res.json(progressData[index]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
});
