import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProductsComponent from "./user/AddProductsComponent";
import EditProductsComponent from "./user/EditProductsComponent"; 
import React from "react";
import ListProductsComponent from './user/ListProductsComponent';


const style = {
color: 'red',
margin: '10px'
} 
const ProductRouter = () => {
    return(
    <div>
    <Router>
    <div className="col-md-6">
    {/* <h1 className="text-center" style={style}> Admin Panel For Doctors</h1> */}
    <Switch>
    <Route path="/" exact component={ListProductsComponent} />
    <Route path="/products" component={ListProductsComponent} />
    <Route path="/add-product" component={AddProductsComponent} />
    <Route path="/edit-product/:id" component={EditProductsComponent} />
    </Switch>
    </div>
    </Router>
    </div>

    )
    }
    
    export default ProductRouter; 
