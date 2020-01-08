import React, { Component } from 'react';
import { connect } from 'react-redux';
import {edit} from './../Redux/Action';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company:'',
            location:'',
            job:'',
            openings:'',
            salary:'',
            company_id:''
        }
    }

    componentDidMount() {
        this.props.Editdata.stored_data.map( e=> {
            if(e.company_id  == this.props.match.params.company_id){
                this.setState({company:e.company, location:e.location, job:e.job, openings:e.openings,salary:e.salary, company_id:e.company_id})
            }
        })
    }
    
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    input_submit = (e) => {
        e.preventDefault()
       console.log(this.state);
      
        this.props.update(this.state)
        this.props.history.push('/')
    }
   
    render() {
    console.log(this.props);
        console.log(this.props.Editdata.stored_data);
        
        return (
           <React.Fragment >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="card mt-5">
                                <div class="card-body">
                                    <h3>Edit company details</h3>
                                    <form onSubmit={this.input_submit}>
                                        <div class="row">
                                            <div class="col">
                                                <div className="mt-2">
                                                <input type="text" class="form-control" placeholder="company" name="company" value={this.state.company} onChange={this.input_change}/>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div className="mt-2">
                                                <input type="text" class="form-control" placeholder="location" name="location" value={this.state.location} onChange={this.input_change}/>    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div className="mt-2">
                                                <input type="text" class="form-control" placeholder="job" name="job" value={this.state.job} onChange={this.input_change}/>
                                        </div>
                                    </div>
                                    <div class="col">
                                    <div className="mt-2">
                                             <input type="text" class="form-control" placeholder="openings" name="openings" value={this.state.openings} onChange={this.input_change}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                    <div className="mt-2">
                                    <input type="text" class="form-control" placeholder="salary" name="salary" value={this.state.salary} onChange={this.input_change}/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-outline-danger mt-3">Add Edited Details</button>
                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
     return {
         Editdata: state.comments
     }
}

const mapDispatchToState = (dispatch) => {
    return{
        update: (send) => dispatch(edit(send))
    }
}
export default connect(mapStateToProps,mapDispatchToState) (Edit)