import React, {Component} from 'react'
import {diagnosis} from './PatientFunctions'

class Diagnosis extends Component {
    constructor() {
        super()
        this.state = {
            diagnosis: '',
            id: ''
        }
        
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault()
        
        const patient = {
            diagnosis: this.state.diagnosis,
            id: this.state.id
        }
        
        diagnosis(patient).then(res => {
                this.props.history.push("")
        })
        
        this.props.history.push(`profile`)
    }
    
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5 pt-1 bg-dark text-white w-50 mx-auto">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal text-center">Add Diagnosis</h1>
                                <div className="form-group">
                                    <label htmlFor="id">Patient Id</label>
                                    <input type="text" className="form-control" name="id" placeholder="Patient Id" value={this.state.id} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="diagnosis">Diagnosis</label>
                                    <input type="text" className="form-control" name="diagnosis" placeholder="Diagnosis" value={this.state.diagnosis} onChange={this.onChange}/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Diagnosis