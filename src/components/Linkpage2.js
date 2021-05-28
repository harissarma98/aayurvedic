/* import React, { useState, useEffect } from "react"
import "./Box.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,index } from "react-bootstrap";


const Linkpage2 = () => {
     const cardInfo = [
      {
        image: "html to react/images/p-1.jpg",
        title: "Product No1",
        text: "THE GOAT",
      },
      {
        image:"html to react/images/p-2.jpg",
        title: "Product No2",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-3.jpg",
        title: "Product No2",
        text: "he good",
      },
      {
        image:"html to react/images/p-4.jpg",
        title: "Product No4",
        text: "he is very close to goat",
      },
      {
        image: "html to react/images/p-5.jpg",
        title: "Product No5",
        text: "THE GOAT",
      },
      {
        image:"html to react/images/p-6.jpg",
        title: "Product No6",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-7.jpg",
        title: "Product No7",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-8.jpg",
        title: "Product No8",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-9.jpg",
        title: "Product No9",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-5.jpg",
        title: "Product No10",
        text: "THE TRUE GOAT",
      },
    ];
  
    const renderCard = (card, index) => {
      return (
        <section class="contact_section layout_padding">
            <div class="d-flex justify-content-center">
      <h2 class="custom_heading">
      Products
      </h2>
    </div>
        <Card style={{ width: "35rem" }} key={index} className="box">
          <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
          <Card.Body>
            <Card.Title style={{color:"gray"}}>{card.title}</Card.Title>
            <Card.Text style={{color:"blue"}}>{card.text}</Card.Text>
          </Card.Body>
        </Card>
        </section>
      );
    };
  
    return <div className="grid">{cardInfo.map(renderCard)}
    
    </div>
  };

export default Linkpage2; */

import React, { useState, useEffect } from "react"
import "./Box.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,index } from "react-bootstrap";
import ProductService from "../service/ProductService";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";


/* const Linkpage2 = () => { */
     /* const cardInfo = [
      {
        image: "html to react/images/p-1.jpg",
        title: "Product No1",
        text: "THE GOAT",
      },
      {
        image:"html to react/images/p-2.jpg",
        title: "Product No2",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-3.jpg",
        title: "Product No2",
        text: "he good",
      },
      {
        image:"html to react/images/p-4.jpg",
        title: "Product No4",
        text: "he is very close to goat",
      },
      {
        image: "html to react/images/p-5.jpg",
        title: "Product No5",
        text: "THE GOAT",
      },
      {
        image:"html to react/images/p-6.jpg",
        title: "Product No6",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-7.jpg",
        title: "Product No7",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-8.jpg",
        title: "Product No8",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-9.jpg",
        title: "Product No9",
        text: "THE TRUE GOAT",
      },
      {
        image:"html to react/images/p-5.jpg",
        title: "Product No10",
        text: "THE TRUE GOAT",
      },
    ]; */
  
    class Linkpage2 extends React.Component {

    constructor(props){
      super(props)
      this.state={
      product_List:[]
      }
      }
      componentDidMount() {
      this.loadAllProduct();
      }
      loadAllProduct = () => {
      ProductService.fetchProducts()
      .then((res)=> {
        console.log(res);
        this.setState({product_List : res.data})
        })
        } 
      
  
    /* const renderCard = (card, index) => { */
      render(){
      return (
        
        <div className="App">
          <Header/>
        <section class="contact_section layout_padding">
            <div class="d-flex justify-content-center">
      <h2 class="custom_heading">
      Products
      </h2>
    </div>
    <Grid container spacing={4}>
    {this.state.product_List.map(product =>( 
        <Grid item xs={4}>
        <Card style={{ width: "35rem" }}  key={product.id} className="box">
          <Card.Img  style={{height:"250px",width:"560px"}} variant="top" src="holder.js/100px180" src={product.productimg} />
          <Card.Body>
            <Card.Title style={{color:"black",textAlign:"left"}}>{product.productname}</Card.Title>
            <Card.Text style={{color:"green",textAlign:"left"}}>CONTACT - {product.contact}</Card.Text>
            <Card.Text style={{color:"green",textAlign:"left"}}>ADDRESS - {product.address}</Card.Text>
            <Card.Text style={{color:"green",textAlign:"left"}}>DESCRIPTION - {product.description}</Card.Text>
          </Card.Body>
        </Card>
       </Grid>
        ))}
        </Grid>
        </section>
        <Footer/>
        </div>
      );
    };
  
    /* return <div className="grid">{cardInfo.map(renderCard)} */
    
 /*    </div>*/
  };
 
export default Linkpage2;