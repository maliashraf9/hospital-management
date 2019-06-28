const express = require("express")
const patients = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Patient = require("../models/Patient")
patients.use(cors())
process.env.SECRET_KEY = 'secret'

patients.post('/registerPatient', (req,res)=>{
    const patientData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        did: req.body.did
    }
    
    Patient.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(patient => {
        if(!patient) {
                Patient.create(patientData)
                .then(patient => {
                    res.json({status: patient.email + ' registered'})
                })
                .catch(err => {
                    res.send('Error: ' + err)
                })
        }else{
            res.json({error: "Patient already exists"})
        }
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
})

patients.post('/diagnosis', (req,res)=>{
    const patientData = {
        diagnosis: req.body.diagnosis,
        id: req.body.id
    }   
    
    Patient.findOne({
        where: {
            id: req.body.id
        }
    })
    .then(patient => {
        if (patient)
        {
            patient.diagnosis = req.body.diagnosis
            patient.save().then(()=>{})
        }else{
            res.json({error: "Patient not present"})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})


module.exports = patients
