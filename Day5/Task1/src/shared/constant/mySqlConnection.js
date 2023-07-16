import mysql from "mysql2";

export var mySqlConnection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "Parmatra@98",
    database: "day5",
  })
  .promise();

export const connected = () => {
  mySqlConnection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
  });
};
