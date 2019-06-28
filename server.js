var express = require("express")
var cors = require("cors")
const mysql = require('mysql')
var bodyParser = require("body-parser")
var app = express();
var http = require('http')
var url = require('url')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_system'
})

connection.connect(err => {
    if (err) {
        return err
    }
})

const selectDoctors = 'SELECT * FROM users'
const selectPatients = 'SELECT * FROM patients'

app.get('/viewDoctors', (req,res) => {
    connection.query(selectDoctors, (err,results) => {
        if (err){
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })    
})

app.get('/viewPatients', function (req,res) {
    connection.query(selectPatients, (err,results) => {
        if (err){
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })    
})


var Users = require('./routes/Doctors')
var Patients = require('./routes/Patients')
app.use('/users', Users)
app.use('/patients', Patients)

app.listen(port, () => {
    console.log("Server is running on port:" + port)
})




