import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    
    
    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white">
                        Sign In as a Doctor
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link text-white">
                        Sign Up as a Doctor
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/registerPatient" className="nav-link text-white">
                        Sign Up as a Patient
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link text-white">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link text-white">
                        Sign Out
                    </a>
                </li>
            </ul>
        )
        
        const patientLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/patientProfile" className="nav-link text-white">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link text-white">
                        Sign Out
                    </a>
                </li>
            </ul>
        )
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggle-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)