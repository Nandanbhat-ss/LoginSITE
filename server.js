const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// ✅ Parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Serve static files (index.html, etc.) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ MySQL connection setup
const db = mysql.createConnection({
  host: '13.235.8.27',   // 🔹 replace with your EC2 public/private IP where MySQL runs
  user: 'tejas',          // 🔹 MySQL username
  password: 'RandomPassword@123', // 🔹 MySQL password
  database: 'loginDB'     // 🔹 your DB name
});

// ✅ Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('❌ MySQL Connection Error:', err);
  } else {
    console.log('✅ MySQL Connected...');
  }
});

// ✅ Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  
  db.query(sql, [name, email, password], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.send('User added successfully!');
  });
});


// ✅ Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${port} and accessible externally`);
});

