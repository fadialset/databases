const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
});


const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  const CREATE_REASERCH_PAPERS_TABLE = `
    CREATE TABLE IF NOT EXISTS research_papers (
      paper_id INT PRIMARY KEY,
      author_name VARCHAR(50),
      paper_title VARCHAR(50),
      conference VARCHAR(50),
      publich_date DATE,
    );`;
    const CREATE_REASERCH_AUTHORS_TABLE =`
    CREATE TABLE IF NOT EXISITS research_authors(
        author_no int not null,
        reaserch_paper_no int not null,
        constraint fk_auth foreign key(author_no) references authors(author_no),
        constraint fk_paper foreign key(research_paper_no) references resaserch_papers(paper_id),
        primary key(author_no,research_paper_no)
    );`;
    const authors = [{}]
  connection.connect();

  try {
    // call the function that returns promise
    await execQuery(CREATE_AUTHORS_TABLE);
    await execQuery(ADD_MENTOR_TABLE);

  } catch (error) {
    console.error(error);
    connection.end();
  }

  connection.end();
}

seedDatabase();
