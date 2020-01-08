import React, { Component } from 'react';
import {connect} from 'react-redux';
import {company_data} from './../Redux/Action';
import {Link} from 'react-router-dom';


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company:'',
            location:'',
            job:'',
            openings:'',
            salary:'',
        }
    }
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000)*1000);
        let data = {
            company:this.state.company,
            location:this.state.location,
            job:this.state.job,
            openings:this.state.openings,
            salary:this.state.salary,
            company_id: random_number
        }
        console.log(data);
        this.props.form_data(data);

        //this.props.history.push('/')
        
    }
    render() {
        return (
            <React.Fragment>
                <div class="card mt-5">
                    <div class="card-header">
                        <h5>Enter company Details</h5>
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    Company :<input type="text" class="form-control" placeholder="Company" name="company" value={this.state.company} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                    Location :<input type="text" class="form-control" placeholder="Location" name="location" value={this.state.location} onChange={this.input_change}/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Job Title :<input type="text" class="form-control" placeholder="Job Title" name="job" value={this.state.job} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                    No. of Openings :<input type="text" class="form-control" placeholder="No. of Openings" name="openings" value={this.state.openings} onChange={this.input_change}/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Salary :<input type="text" class="form-control" placeholder="Salary" name="salary" value={this.state.salary} onChange={this.input_change}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success mt-3">Add Details</button>
                        </form>
                        <Link to="/" class="btn btn-outline-success mt-3 ml-5">Home  </Link>
                    </div>
                    
                    <div class="card-footer text-muted">
                       
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        form_data:(data) => dispatch(company_data(data))
    }
}
export default connect(null, mapDispatchToProps)(Form) 