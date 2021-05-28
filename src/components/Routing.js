import React from 'react';
/* import './App.css'; */
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import AddDoctorsComponent from './user/AddDoctorsComponent';
import AddProductsComponent from './user/AddProductsComponent';
import Admin from './user/Adminpage';
import EditDoctorsComponent from './user/EditDoctorsComponent';
import EditProductsComponent from './user/EditProductsComponent';
import ListDoctorsComponent from './user/ListDoctorsComponent';
import ListProductsComponent from './user/ListProductsComponent';






    function Routing() {
      return (
        <>
        <div>
            
          <Router>       
        <div>
         <Switch>
        {/*  <Route exact path='/admin' component={Admin}/> */}
          <Route exact path='/admin/users' component={ListDoctorsComponent}/>
          <Route exact path='/admin/edit-user/:id' component={EditDoctorsComponent}/>
          <Route exact path='/admin/add-user' component={AddDoctorsComponent}/>
          <Route exact path='/admin/products' component={ListProductsComponent}/>
          <Route exact path='/admin/add-product' component={AddProductsComponent}/>
          <Route exact path='/admin/edit-product/:id' component={EditProductsComponent}/>
        </Switch> 
        </div>
        </Router>  
        </div>
        </>
      );
    
    }


export default Routing;
