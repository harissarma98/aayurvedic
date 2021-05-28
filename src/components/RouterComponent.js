import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListDoctorsComponent from "./user/ListDoctorsComponent";
import AddDoctorsComponent from "./user/AddDoctorsComponent";
import EditDoctorsComponent from "./user/EditDoctorsComponent";
import React from "react";

const style = {
color: 'red',
margin: '10px'
} 
const AppRouter = () => {
    return(
    <div>
    <Router>
    <div className="col-md-6">
    {/* <h1 className="text-center" style={style}> Admin Panel For Doctors</h1> */}
    <Switch>
    <Route path="/" exact component={ListDoctorsComponent} />
    <Route path="/users" component={ListDoctorsComponent} />
    <Route path="/add-user" component={AddDoctorsComponent} />
    <Route path="/edit-user/:id" component={EditDoctorsComponent} />
    </Switch>
    </div>
    </Router>
    </div>

    )
    }
    
    export default AppRouter; 

   