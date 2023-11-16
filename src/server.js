const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  multipleStatements: true
});

db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }  
  console.log('Connected to the MySQL server.');
  // db.query("create database prati_website_2023;", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });
db.query("USE prati_website_2023;", function (err, result) {
    if (err) throw err;
    console.log("Database changed to prati_website_2023");
  });
  
// db.query("CREATE TABLE SoloSinging  (Name varchar(200),College_ID varchar(255));", function(err, result) {
//     if (err) throw err;
//     console.log("Table created!");  
//   })
  // db.query("CREATE TABLE StandUp (Name varchar(200),College_ID varchar(255));", function(err, result) {
  //   if (err) throw err;
  //   console.log("Table created!");  
  // })
  // db.query("CREATE TABLE MonoAct (Name varchar(200),College_ID varchar(255));", function(err, result) {
  //   if (err) throw err;
  //   console.log("Table created!");  
  // })
  // db.query("CREATE TABLE SemiClassical (Name varchar(200),College_ID varchar(255));", function(err, result) {
  //   if (err) throw err;
  //   console.log("Table created!");  
  // })

  // db.query('DROP TABLE GroupDance;', (dropErr, dropResult) => {
  //   if (dropErr) {
  //     console.error('Error dropping table:', dropErr);
  //   } else {
  //     console.log('Table dropped successfully');
  //   }

  // });
     db.query("CREATE TABLE GroupDance (TeamName varchar(200),participantNumber int,participantName varchar(100),college_ID varchar(255));", function(err, result) {
    if (err) throw err;
    console.log("Table created!");  
  })
  app.post('/:event/addteam', (req, res) => {
    const { event } = req.params;
    const { teamName, participantNumber, participants } = req.body;
    console.log(req.body, event);

    for (let i = 0; i < participantNumber; i++) {
        console.log(participants[i].name, participants[i].collegeId);
        const sql = `INSERT INTO ${event} (TeamName, participantNumber, participantName, College_ID) VALUES (?, ?, ?, ?);`;
        db.query(sql, [teamName, participantNumber, participants[i].name, participants[i].collegeId], (err, result) => {
            if (err) {
                console.error('Error:', err.message);
                return res.status(500).send('Internal Server Error');
            }

            console.log('Team added to the table');
            // You can choose to do something after each insertion if needed
        });
    }

    // Send a single response after all iterations are complete
    res.status(200).send('Participants added successfully');
});

  app.post('/teamevent/:event/addParticipants', (req, res) => {
    const {event}=req.params;
    const { participantName, collegeId } = req.body;
    console.log(req.body,event)
  
    const sql = `INSERT INTO ${event} (Name, College_ID) VALUES (?, ?);`;
    db.query(sql, [participantName, collegeId], (err, result) => {
        if (err) {
            console.error('Error:', err.message);
            return res.status(500).send('Internal Server Error');
        }
  
        console.log('Participant added to the table');
        res.status(200).send('Participant added successfully');
    });
  });
  
app.post('/:event/addParticipant', (req, res) => {
  const {event}=req.params;
  const { participantName, collegeId } = req.body;
  console.log(req.body,event)

  const sql = `INSERT INTO ${event} (Name, College_ID) VALUES (?, ?);`;
  db.query(sql, [participantName, collegeId], (err, result) => {
      if (err) {
          console.error('Error:', err.message);
          return res.status(500).send('Internal Server Error');
      }

      console.log('Participant added to the table');
      res.status(200).send('Participant added successfully');
  });
});

});
app.listen(9000, () => {
  console.log(`Server is running on port 3906`);
});
