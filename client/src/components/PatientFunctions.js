import axios from 'axios'

export const registerPatient = newPatient => {
    return axios
    .post('patients/registerPatient', {
        first_name: newPatient.first_name,
        last_name: newPatient.last_name,
        email: newPatient.email,
        did: newPatient.did
    })
    .then(res => {
        console.log("Registered")
    })
}

export const diagnosis = diagnosisPatient => {
    return axios
    .post('patients/diagnosis', {
        diagnosis: diagnosisPatient.diagnosis,
        id: diagnosisPatient.id
    })
    .then(res => {
        console.log("Diagnosis Added")
    })
}

