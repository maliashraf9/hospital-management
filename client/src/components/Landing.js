import React, {Component} from 'react'

class Landing extends Component {
    
    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/viewDoctors`)
    }
    
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5 bg-dark text-white w-75 mx-auto">
                    <div className="col-lg-12 mx-auto">
                        <h1 className="text-center pb-5">Hospital Portal</h1>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="text-center">
                            <button type="submit" className="btn btn-lg btn-primary">
                                View all Doctors
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Landing