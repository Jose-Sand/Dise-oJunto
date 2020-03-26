var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'rhpj-database.czm8qnebos6f.us-east-1.rds.amazonaws.com',
  user: 'RHPJ',
  password: 'Miuniverso423',
  database: 'Database-schema-J'
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO dark (lat, lon) VALUES ?";
//   var values = [['11.1223','-74.121212']]; 
//   con.query(sql,[values], function (err, result) {
//     if (err) throw err;
//     console.log("data insert");
//   });
// });

con.connect(function(err) {
    if (err) throw err;
    var sql =
        "INSERT INTO designsyrus (fech, hora, lat, long ) VALUES ?";
      var value = [[Fecha, Hora, lat, long]];
      conec.query(sql, [value], function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        //con.end();
      });
  });

  