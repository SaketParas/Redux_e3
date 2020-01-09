import React, { Component } from 'react';
import { Link ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { remove } from './../Redux/Action'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            final_data: [],
            page: 1,
            per_page: 3,
            total: '',
        }
    }
    on_change = () => {
        let x = this.state.final_data.sort((a, b) => (a.salary - b.salary))
        this.setState({
            final_data: x
        })
    }
    on_change_desen = () => {
        let x = this.state.final_data.sort((a, b) => (b.salary - a.salary))
        this.setState({
            final_data: x
        })
    }

    handle_change = (e) => {
        this.setState({ page: e })
    }
    //   ***********************************
    handleDelete = (id) => {
        console.log(id);
        this.props.remove(id)
    }
    handleOpening = (e) => {
        let x = this.state.final_data.reduce((e, ab) => e + Number(ab.openings), 0)
        console.log(x)
        this.setState({ total: x })
    }
    // ********************************************************
    render() {
 
        //console.log(this.state.total);

        //console.log(this.props.add.stored_data);
        this.state.final_data = this.props.add.stored_data
        let data = this.state.final_data
        let pageNo = this.state.page
        let per_page_no = this.state.per_page
        var total_page = Math.ceil(data.length / per_page_no)
        let start = (pageNo - 1) * per_page_no
        let end = start + per_page_no
        let pagination_data = data.slice(start, end)
        //console.log(pagination_data);
        
        var button_number = []
        for (var i = 1; i <= total_page; i++) {
            button_number.push(i)
        }
        var button = button_number.map(a => {
            return (
                <button className="btn btn-primary mr-1" onClick={() => this.handle_change(a)}>{a}</button>
            )
        })

        let show_user = pagination_data.reverse().map(e => {
            return (
                <tr>
                    <th scope="row">{e.company}</th>
                    <td>{e.location}</td>
                    <td>{e.job}</td>
                    <td>{e.openings}</td>
                    <td>{e.salary}</td>
                    <td><Link to={`/edit/${e.company_id}`}>edit</Link></td>
                    <td><button onClick={() => this.handleDelete(e.company_id) }>Delete</button></td>
                </tr>
            )
        })
        

        return(
            <React.Fragment>
                <div class="card text-center mt-5">
                    <div class="card-header">
                        <Link to="/Form" class="btn btn-outline-success mt-3 ml-5">Company form </Link>

                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Company</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">No. Openings</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {show_user}
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-muted">
                        {button}
                    </div>
                </div>

                <div>
                    Sort salary by : <button class="btn btn-outline-success" onClick={this.on_change}> Incr.</button>
                    <button class="btn btn-outline-success ml-2" onClick={this.on_change_desen}>Dec.</button>

                </div>
                <div class="card">
                    <div class="card-body">
                       
                        <Link className="btn btn-success" onClick={this.handleOpening}>Total Job openig { this.state.total}</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        remove: (send) => dispatch(remove(send))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Home) 