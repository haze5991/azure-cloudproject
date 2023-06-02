const sql = require('mssql');

const dbConfig = {
  user: 'sa',
  password: 'Zakir_166',
  server: 'localhost',
  database: 'mydatabase',
  options: {
    encrypt: true, // Use this for Azure SQL Database
    trustServerCertificate: true // Use this for development/testing only
  }
};

sql.connect(dbConfig, (err) => {
  if (err) {
    console.log('Failed to connect to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM Users'; // Replace 'Users' with your actual table name
  
    sql.query(query, (err, result) => {
      if (err) {
        console.log('Error executing query:', err);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.json(result.recordset);
      }
    });
  });