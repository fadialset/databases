const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
//   database : 'meetup',
  port : 3306
});

connection.connect();

// Drop Database meetup!

const dropDataBase = "DROP DATABASE meetup";
connection.query(dropDataBase , function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log(`Database meetup Dropped!`);
});


// Create Database meetup If Not Exists!

const createDatabase = "CREATE DATABASE IF NOT EXISTS meetup";
connection.query(createDatabase, function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log(`Database meetup Created!`);
});


connection.query(("USE meetup"), (error, results, fields) => {
    if (error) throw error;
});


const createQueryInvitee = "create table Invitee (invitee_no int, invitee_name varchar(50), invited_by varchar(50))";
const createQueryRoom = "create table Room (room_no int, room_name varchar(50), floor_number int)";
const createQueryMeeting = "create table Meeting (meeting_no int, meeting_title varchar(50), starting_time datetime, ending_time datetime, room_no int)";

function createTable(createQueryTable,tableName){
    connection.query(createQueryTable, function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(`Table ${tableName} Created!`);
    });
};

createTable(createQueryInvitee,"Invitee");
createTable(createQueryRoom,"Room");
createTable(createQueryMeeting,"Meeting");

const insertQueryInvitee = [
    "insert into Invitee values (1, 'Samer', 'Fadi')",
    "insert into Invitee values (2, 'Ramos', 'Fadi')",
    "insert into Invitee values (3, 'Marcelo', 'Fadi')",
    "insert into Invitee values (4, 'Benzema', 'Fadi')",
    "insert into Invitee values (5, 'Hazard', 'Fadi')"
    ];

const insertQueryRoom = [
    "insert into Room values (12, 'Room1', 1)",
    "insert into Room values (37, 'Room7', 1)",
    "insert into Room values (16, 'Room25', 2)",
    "insert into Room values (25, 'Room39', 3)",
    "insert into Room values (44, 'Room56', 5)"
    ];

const insertQueryMeeting = [
    "insert into Meeting values (1, 'Title1', '2020-02-22 08:00:00', '2020-02-22 10:00:00', 12)",
    "insert into Meeting values (2, 'Title2', '2020-02-22 10:00:00', '2020-02-22 12:00:00', 27)",
    "insert into Meeting values (3, 'Title3', '2020-02-22 12:00:00', '2020-02-22 13:00:00', 25)",
    "insert into Meeting values (4, 'Title4', '2020-02-22 13:00:00', '2020-02-22 14:00:00', 16)",
    "insert into Meeting values (5, 'Title5', '2020-02-22 15:00:00', '2020-02-22 17:00:00', 44)",
    ];

    function insertRecords(insertQueryTable,tableName){
    insertQueryTable.forEach(row => {
        connection.query(row, function (error, results, fields) {
            if (error) {
                throw error;
            }
            console.log(`A New Records Add To ${tableName}!`);
        });  
    });
};
insertRecords(insertQueryInvitee, 'Invitee');
insertRecords(insertQueryRoom, 'Room');
insertRecords(insertQueryMeeting, 'Meeting');

connection.end();
