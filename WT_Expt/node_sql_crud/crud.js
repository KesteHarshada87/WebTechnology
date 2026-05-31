const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Harshu@87',
    database: 'node_studentDB'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected to mysql");

    con.query(
        "INSERT INTO students(name,city) VALUES ('Harshada','Pune')",
        (err) => {
            if (err) throw err;
            console.log("Record inserted");
        }
    );

    con.query(
        "SELECT * FROM students",
        (err, result) => {
            if(err) throw err;
            console.log("Student Records: ")
            console.log(result);
        }
    );

    con.query(
        "UPDATE students SET city='Mumbai' WHERE id=1",
        (err) => {
        if(err) throw err;
        console.log("Record updated");
        }
    );

    con.query(
        "DELETE FROM students WHERE id=1",
        (err) => {
            if (err) throw err;
            console.log("Record Deleted");
        }
    );
})