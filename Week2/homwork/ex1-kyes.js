const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'fadiweek2',
  port: 3306
});


const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  const CREATE_AUTHORS_TABLE = `
    CREATE TABLE IF NOT EXISTS authors (
        author_no INT auto_increment PRIMARY KEY ,
        author_name VARCHAR(255),
        university VARCHAR(255),
        date_of_birth DATE,
        h_index INT,
        gender ENUM('m', 'f')
    );`;
    const ALTER_AUTHORS_TABLE = `
        ALTER TABLE authors ADD COLUMN mentor INT,
        ADD CONSTRAINT  fk_mentor FOREIGN KEY (mentor) REFERENCES authors(author_no);`;

  connection.connect();

  try {
    await execQuery(CREATE_AUTHORS_TABLE);
    await execQuery(ALTER_AUTHORS_TABLE);
  } catch (error) {
    console.error(error);
    connection.end();
  }

  connection.end();
}

seedDatabase();