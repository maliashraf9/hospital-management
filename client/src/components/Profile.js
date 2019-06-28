import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    
    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            did: 0
        }
    }
    
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            id: decoded.id,
            did: decoded.did
        })
    }
    
    
    onSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/viewPatients`)
    }
    
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5 bg-dark text-white w-75 mx-auto">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome to your profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody className="text-center">
                            <tr>
                                <td>{this.state.first_name+" "}{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="text-center">
                            <button type="submit" className="btn btn-lg btn-primary">
                                View your Patients
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile