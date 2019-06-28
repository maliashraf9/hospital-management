import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import RegisterDoctor from './components/RegisterDoctor'
import Profile from './components/Profile'
import RegisterPatient from './components/RegisterPatient'
import ViewDoctors from './components/ViewDoctors'
import ViewPatients from './components/ViewPatients'
import Diagnosis from './components/Diagnosis'

class App extends Component {
    
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/" component={Landing}/>
                    <div className="container">
                        <Route exact path="/register" component={RegisterDoctor}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/profile" component={Profile}/>    
                        <Route exact path="/registerPatient" component={RegisterPatient}/>
                        <Route exact path="/viewDoctors" component={ViewDoctors}/>
                        <Route exact path="/viewPatients" component={ViewPatients}/>
                        <Route exact path="/diagnosis" component={Diagnosis}/>
                    </div>
                </div>
            </Router>  
        );
    }
}

export default App;
