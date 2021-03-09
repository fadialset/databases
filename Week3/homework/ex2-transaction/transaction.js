const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'transaction',
  port: 3306
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  connection.connect();

  try {
    await execQuery("START TRANSACTION");

    await execQuery('UPDATE account SET balance = balance - 1000 WHERE account_number = 101 and balance >= 1000' );
    await execQuery('UPDATE account SET balance = balance + 1000 WHERE account_number = 102');
    await execQuery(`INSERT INTO account_changes (account_number, amount, changed_date, remark) values (101, 1000, now(), "sent money to account 102")`);
    await execQuery(`INSERT INTO account_changes (account_number, amount, changed_date, remark) values (102, 1000, now(), "recived money from account 101")`);
    
    await execQuery("COMMIT");
  } catch (error) {
    console.error(error);
    await execQuery("ROLLBACK");
    connection.end();
  }

  connection.end();
}

seedDatabase();
