/* import React, {useLayoutEffect} from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

 const Doctors = () => {
  const cardInfo = [
    {
      image: "https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg",
      title: "Doctor No1",
      text: "THE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No2",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://blog.capterra.com/wp-content/uploads/2019/10/HEAD-Top_9_Medical_Apps_for_Doctors_Hero_no_text.png",
      title: "Doctor No2",
      text: "he good",
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFHP77ePPUWNxsI0E6gH3vREmL2IZEmd-Kg&usqp=CAU",
      title: "Doctor No4",
      text: "he is very close to goat",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ywl_tf5CykIKOvfSd7AqL9uKxdb7BV1lEs2gH3t7uG0ZSXErH-a4E4CJB0tPdCcgwhk&usqp=CAU",
      title: "Doctor No5",
      text: "THE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No6",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No7",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No8",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No9",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No10",
      text: "THE TRUE GOAT",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <section class="contact_section layout_padding">
        <div class="detail">
      <Card style={{ width: "35rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title style={{color:"gray"}}>{card.title}</Card.Title>
          <Card.Text style={{color:"blue"}}>{card.text}</Card.Text>
          <Card.Link href="/linkpage">More info</Card.Link>
        </Card.Body>
      </Card>
      </div>
      </section>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}
  
  </div>
};

export default Doctors */


import React, {useLayoutEffect} from "react";
import "./Box.css";
import { Card,index } from "react-bootstrap";
import ApiService from "../service/ApiService";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

/*  const Doctors = () => { */
  /* const cardInfo = [
    {
      image: "https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg",
      title: "Doctor No1",
      text: "THE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No2",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://blog.capterra.com/wp-content/uploads/2019/10/HEAD-Top_9_Medical_Apps_for_Doctors_Hero_no_text.png",
      title: "Doctor No2",
      text: "he good",
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFHP77ePPUWNxsI0E6gH3vREmL2IZEmd-Kg&usqp=CAU",
      title: "Doctor No4",
      text: "he is very close to goat",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ywl_tf5CykIKOvfSd7AqL9uKxdb7BV1lEs2gH3t7uG0ZSXErH-a4E4CJB0tPdCcgwhk&usqp=CAU",
      title: "Doctor No5",
      text: "THE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No6",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No7",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No8",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No9",
      text: "THE TRUE GOAT",
    },
    {
      image:"https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg",
      title: "Doctor No10",
      text: "THE TRUE GOAT",
    },
  ]; */

  class Doctors extends React.Component {

  constructor(props){
    super(props)
    this.state={
    user_List:[]
    }
    }
    componentDidMount() {
    this.loadAllUser();
    }
    loadAllUser = () => {
    ApiService.fetchUsers()
    .then((res)=> {
      console.log(res);
      this.setState({user_List : res.data})
      })
      } 

 /*  const renderCard = (card, index) => { */
  render(){
    return (
      <>
      <Header/>
      <section class="contact_section layout_padding">
       
        <div class="detail">
          <Grid container spacing={4}>
        {this.state.user_List.map(user =>( 
          <Grid item xs={4}>
      <Card style={{ width: "35rem",borderStyle: "solid" }} key={user.id} className="box">
        <Card.Img style={{height:"250px",width:"560px"}} variant="top" src="holder.js/100px180" src={user.doctorimg} />
        <Card.Body>
          <Card.Title style={{color:"black"}}>Dr.{user.doctorname}</Card.Title>
          <Card.Text style={{color:"green"}}>CONTACT - {user.contact}</Card.Text>
            <Card.Text style={{color:"green"}}>ADDRESS - {user.address}</Card.Text>
            <Card.Text style={{color:"green"}}>DESCRIPTION - {user.description}</Card.Text>
         {/*  <Card.Link href={"/linkpage/"+user.id}>More info</Card.Link> */}
        </Card.Body>
      </Card>
      </Grid>
      ))}
      </Grid>
      </div>
      </section>
      <Footer/>
      </>
    );
  };
  }
  /* return <div className="grid">{cardInfo.map(renderCard)}
  
  </div> */
/* }; */

export default Doctors

