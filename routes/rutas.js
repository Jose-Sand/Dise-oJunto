// server
const { conec } = require('../server');
const bodyParser = require("body-parser"); // nejorar el envio de uinf

const path = require("path");
const port = process.env.PORT || 8080;
const { app } = require('../server');
const { express1 } = require('../server');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("public", __dirname + "/public");

// static files
app.use("/public", express1.static('./public/'));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get("/datos", (req, res) => {
    if (conec) {
        var sql = "SELECT * FROM designsyrus ORDER BY id DESC limit 1 ";
        conec.query(sql, function(err, result) {
            if (err) throw err;
            res.json(result[0]);
            //console.log('La base de datos: ',result[0]);
            //con.end();
        });
    } else {
        console.log("error conection with db");
    }
    //res.json(`${mensaje}`);
});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});