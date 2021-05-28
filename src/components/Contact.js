import { TextareaAutosize } from '@material-ui/core';
import React /* {Component} */ from 'react';
import { Card,index } from "react-bootstrap";
import Header from './Header';

  /* class Contact extends React.Component{
  constructor(){
    super();
    this.state = {subject:"",number:"",body:""};
  }

validateForm = event =>{
  var subject = document.getElementById("subject").value;
  var number = document.getElementById("number").value;
  var body = document.getElementById("body").value;
  window.location.herf = "mailto:aayurvedic@gmail.com?subject="+subject+"&number="+number+"&body="+body;
   event.preventDefault();
  return false; 
} */

  function Contact(){
    return(
      
      <div>
        <Header/>
        <section class="contact_section layout_padding">
         <div class=" " >
           <div class="col-md-8"> 
           <div class="d-flex mb-6 ml-6 ml-md-2">
<html lang="en">
<head>
  <meta charSet="url-8"/>
    <title>Contact form</title>
</head>
{/* <body> */}
<div>
<form action="https://formsubmit.co/aayurvedic21@gmail.com" method="POST">
<div>
            <input type="text" placeholder="Name" style={{width:"800px"}} />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" class="message-box" placeholder="Message" />
          </div>
    
     <button type="submit">Send</button>
</form> 
</div>
{/* </body> */}
</html>

</div>
</div>
     </div>
</section>
  {/* <!-- contact section --> 
 */}
{/*  <section class="contact_section layout_padding">
  <div class="container" id="mailme">
    <div class="col-md-6">
      <div class="d-flex mb-4 ml-4 ml-md-0">
        <h2 class="custom_heading text-center">
          CONTACT US
        </h2>
      </div>
       <form class="justify-contant-center" onsubmit={this.validateForm} target="_blank" method="GET"> 
      <form action="https://formsubmit.co/aayurvedic21@gmail.com" method="POST">
      <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Pone Number" />
          </div>
          <div>
            <input type="text" class="message-box" placeholder="Message" />
          </div>
      <div class="form-group form-group-lg">
            <input type="text" id="subject" class="form-control" placeholder="Mail" required/>
          </div>
      <div class="form-group form-group-lg">
            <input type="text" id="subject" class="form-control" placeholder="Name" required/>
          </div>
          <div class="form-group form-group-lg">
            <input type="text" id="number" class="form-control" placeholder="Phone number" required/>
          </div>
          <div class="form-group form-group-lg">
            <input type="text" id="body" class="form-control" placeholder="Message" rows="5" required/>
          </div>
          <div class="justify-content-center mt-4">
            <input type="submit" value="send" id="navigation" class="btn btn-primary"/>
           <button type="submit" value="send" id="navigation">
              SEND
            </button>
          </div>
          </form>
    </div>
  </div>
</section>  */}

{/* <section class="contact_section layout_padding">
 
    <div class="col-md-6">
      <div class="d-flex mb-4 ml-4 ml-md-0">
        <h2 class="custom_heading text-center">
          CONTACT US
        </h2>
      </div>
      <div class="container" id="mailme">
        <div class="row">
          <div class="col sm-8 offset-md-2">
      <form class="justify-contant-center" onSubmit={this.validateForm} target="_blank" method="GET">
      <div class="form-group form-group-lg">
        <label class="skills" for="subject">
          <strong>Name</strong>
          </label>
            <input type="text" id="subject" class="form-control" placeholder="Name" required/>
          </div>
          <div class="form-group form-group-lg">
          <label class="skills" for="number">
          <strong>Number</strong>
          </label>
            <input type="text" id="number" class="form-control" placeholder="Phone number" required/>
          </div>
          <div class="form-group form-group-lg">
          <label class="skills" for="body">
          <strong>Message</strong>
          </label>
            <textarea id="body" class="form-control" placeholder="Message" rows="5" required/>
          </div>
          <div class="d-flex justify-content-center mt-4 ">
           <input type="submit" value="send" id="navigation" class="btn btn-primary"/>
           </div> 
          </form>
          </div>
          </div>
    </div>
  </div>
</section>  */}

{/* <!-- end contact section -->



<!-- info section --> */}

<section class="client_section layout_padding">
    <div class="d-flex justify-content-center">
      <h2 class="custom_heading">
        Testimonial
      </h2>
    </div>
    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="client_container layout_padding">
             

              <div class="detail_box">
                <h5>
                  <span>
                    A
                  </span>
                  <span>
                    Y
                  </span>
                  <span>
                    U
                  </span>
                  <span>
                    R
                  </span>
                  <span>
                    V
                  </span>
                  <span>
                    E
                  </span>
                  <span>
                    D
                  </span>
                  <span>
                    A
                  </span>
                </h5>
                <p>
                The word “Ayur” means Life/ and “Veda” means Science/,Ayurveda means LIFESCIENCE.
                  <br></br>
                  <br></br>
                
                The great thing about Ayurveda is that its treatments always yield side benefits, not side effects.
                
            

                </p>
              </div>
            </div>
          </div> 
        </div>

      </div>

    </div>
  </section>


 



      </div>

    )
  }

export default Contact;