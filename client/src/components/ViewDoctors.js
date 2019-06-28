import React, {Component} from 'react';

class App extends Component {
    
    state = {
        doctors: []
    }
    
    componentDidMount() {
        this.getDoctors()   
    }

    getDoctors = _=> {
        fetch('http://localhost:3000/viewDoctors')
        .then(response => response.json())
        .then(response => this.setState({doctors: response.data}))
        .catch(err => console.error(err))
    }
    
    render() {
        const {doctors} = this.state
        return (
            <div className="container">
                <div className="jumbotron mt-5 bg-dark text-white w-75 mx-auto">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">List of Doctors</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header">
                                                <h3 className="text-center text-dark">
                                                    {doctors.map(doctors => <div className="text-center">{doctors.id+". "}{doctors.first_name+" "}{doctors.last_name}</div>)}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;
