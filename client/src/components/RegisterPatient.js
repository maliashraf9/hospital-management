import React, {Component} from 'react'
import {registerPatient} from './PatientFunctions'

class RegisterPatient extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            did: ''
        }
        
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubmit1 = this.onSubmit1.bind(this)
    }
    
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault()
        
        const patient = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            did: this.state.did
        }
        
        registerPatient(patient).then(res => {
                this.props.history.push("")
        })
    }
    
    onSubmit1(e) {
        e.preventDefault()
        this.props.history.push(`ViewDoctors`)
    }
    
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5 pt-1 bg-dark text-white w-50 mx-auto">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal text-center">Sign Up</h1>
                                <div className="form-group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input required type="text" className="form-control" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" className="form-control" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="did">Who do you want an appointment with?</label>
                                    <input type="text" className="form-control" name="did" placeholder="Doctor Id" value={this.state.did} onChange={this.onChange}/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Sign Up
                                </button>
                            </form>
                            <form onSubmit={this.onSubmit1}>
                                <button type="submit" className="btn btn-lg mt-3 btn-primary btn-block">
                                    See available Doctors
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPatient