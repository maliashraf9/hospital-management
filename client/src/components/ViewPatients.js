import React, {Component} from 'react';
import jwt_decode from 'jwt-decode'
import {Link, withRouter} from 'react-router-dom'

class App extends Component {
    
    state = {
        patients: []
    }

    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    componentDidMount() {
        this.getPatients()
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.id
        })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/diagnosis`)
    }

    getPatients = _=> {
        fetch('http://localhost:3000/viewPatients')
         .then(response => response.json())
         .then(response => this.setState({patients: response.data}))
        .catch(err => console.error(err))
    }
    
    render() {
        const {patients} = this.state
        return (
            <div className="container">
                <div className="jumbotron mt-5 bg-dark text-white w-75 mx-auto">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">List of Patients</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header">
                                                <h3 className="text-dark">
                                                     {patients.filter((i) => i.did == this.state.id).map(patients => <div className="text-center">{patients.id+". "}{patients.first_name+" "}{patients.last_name}<div className="h6">{"Diagnosis: "+patients.diagnosis}</div></div>)}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="text-center">
                            <button type="submit" className="btn btn-lg btn-primary">
                                Add Diagnosis for a Patient
                            </button>
                        </div>
                    </form>                                                                                     
                </div>
            </div>
        )
    }
}

export default App;
