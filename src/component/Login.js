import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit = (e) => {
        e.preventDefault()
        console.log((this.state));
        
    }
    render() {
        return (
            <React.Fragment>
                <div class="card mt-5">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    User Name :<input type="text" class="form-control" placeholder="User Name" name="username" value={this.state.username} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                    Password :<input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.input_change}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success mt-3">Login</button>
                        </form>
                    </div>
                    <div class="card-footer text-muted">
                       
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Login 