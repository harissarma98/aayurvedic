import React, { useState, useEffect } from "react"
/* import "./linkpage.css" */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Box.css";
import { Card,index } from "react-bootstrap";
import ApiService from "../service/ApiService";

/* function Linkpage() { */
  class Linkpage extends React.Component {

    constructor(props){
      super(props)
      this.state={
        id: '', 
doctorname: '',
doctorimg: '',
address: '',
contact: '',
description:'',
}
}

componentDidMount() {
const userId = this.props.match.params.id;
// ApiService.fetchUserById(userId)
// console.log(userId);
ApiService.fetchUserById(userId)
.then((res) => {
let user = res.data;
this.setState({
id: user.id, 
doctorname: user.doctorname,
doctorimg: user.doctorimg,
address:user.address,
contact: user.contact,
description:user.description,

})
});
} 
    render(){
  return (
    <div>
       <div className="App">
   <section class="contact_section layout_padding">
      <div class="d-flex justify-content-center">
      <h2 class="custom_heading">
         Doctors
      </h2>
    </div>
    
  <Card key={this.state.id} style={{ width: "50rem" }} className="box">

    <Card.Img variant="centre" src={this.state.doctorimg}/>
    <Card.Body>
      <Card.Text style={{color:"blue"}}>
        {this.state.doctorname}<br/>
         {this.state.address}<br/>
          {this.state.contact}<br/>
          {this.state.description}
      </Card.Text>
    </Card.Body>
    </Card>
  </section>
     </div>
     </div>
  );
};
  }
export default Linkpage;