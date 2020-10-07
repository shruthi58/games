// to check for changes in database as people signup 

const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('customer.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

db.serialize(() => {
  db.each(`select * from customerDetails`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

/* another method */




const sqlite3 = require('sqlite3').verbose();



// open the database
let db = new sqlite3.Database('customer');


const result =db.get('SELECT * FROM customerDetails;'); //SELECT * FROM sqlite_master;
console.log(result);

let sql = `SELECT * FROM customerAddress`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

// close the database connection
db.close();
