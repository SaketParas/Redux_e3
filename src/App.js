import React from 'react';
//import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './component/Home';
import Form from './component/Form';
import Table from './component/Table';
import Edit from './component/Edit';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Route exact path="/" render={props => <Home {...props}/>}/>
        <Route  path="/Form" render={props => <Form {...props}/>}/>
        <Route  path="/Table" render={props => <Table {...props}/>}/>
        <Route  path="/edit/:company_id" render={props=> < Edit {...props}/>} />

        </BrowserRouter>
    </div>
  );
}

export default App;
