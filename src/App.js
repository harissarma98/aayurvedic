import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
/* import * as ReactBootStrap from "react-bootstrap"; */
import Home from './components/pages/Home';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Linkpage from './components/Linkpage';
import Linkpage2 from './components/Linkpage2';
import AppRouter from './components/RouterComponent';
 /* import ProductRouter from './components/RouterProductComponent';  */
import Admin from './components/user/Adminpage';
import ListDoctorsComponent from './components/user/ListDoctorsComponent';
import EditDoctorsComponent from './components/user/EditDoctorsComponent'; 
import ListProductsComponent from './components/user/ListProductsComponent';
import EditProductsComponent from './components/user/EditProductsComponent';
import AddDoctorsComponent from './components/user/AddDoctorsComponent';
import AddProductsComponent from './components/user/AddProductsComponent';
import Routing from './components/Routing';






    function App() {
      return (
        <>
       {/*  <div>
          <Routing/>
        </div> */}
        <div>
            
          <Router>       
       {/*  <Header/> */}
        {/* <AppRouter/> */}
        {/* <ProductRouter/>  */}

        <div>
         <Switch>
          <Route exact path='/Home' component={Home} />
          <Route path='/Doctors' component={Doctors} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Products' component={Products} />
          <Route path='/Linkpage2' component={Linkpage2}/>
         <Route exact path='/admin' component={Admin}/> 
         <Route exact path='/admin/users' component={ListDoctorsComponent}/>
          <Route exact path='/admin/edit-user/:id' component={EditDoctorsComponent}/>
          <Route exact path='/admin/add-user' component={AddDoctorsComponent}/>
          <Route exact path='/admin/products' component={ListProductsComponent}/>
          <Route exact path='/admin/add-product' component={AddProductsComponent}/>
          <Route exact path='/admin/edit-product/:id' component={EditProductsComponent}/>
           {/* <Route exact path='/linkpage/:id' component={Linkpage}/> */} 
        </Switch> 
        </div>
       
        {/* <Footer/> */}
        </Router>  
        </div>
        
        </>
      );
    
    }


export default App;
