import React , {Component} from 'react';
import ReactDOM from 'react-dom';
// import './App.css'
// import './css/style.css'
import Button from "@material-ui/core/Button"; 
import ApiService from '../service/PeoplesaidService'




class PeopleHome extends React.Component {
	constructor(props){
		super(props)
		this.state={
		said_List:[]
		}
		}
		componentDidMount() {
		this.loadAllPeople();
		}
		loadAllPeople = () => {
		ApiService.fetchUsers()
		.then((res)=> {
			console.log(res);
			this.setState({said_List : res.data})
			})
			} 

    render(){
       
        return(
            <div>
            <section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Our Services</h2>
				<ol className="breadcrumb header-bradcrumb">
				  <li><a href="index.html">Home</a></li>
				  <li className="active">Our Services</li>
				</ol>
			</div>
		</div>
	</div>
</section>

{/* 
	<!-- Start Services Section
		==================================== --> */}

<section className="services" id="services">
	<div className="container">
		<div className="row no-gutters">
			{/* <!-- section title --> */}
			<div className="col-12">
				<div className="title text-center">
					<h2>Our Services</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex,
						in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
					<div className="border"></div>
				</div>
			</div>
			{/* <!-- /section title --> */}

			{/* <!-- Single Service Item --> */}
			{this.state.said_List.map(people =>( 
			<div key={people.id} className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				
				<div className="service-block p-4 color-bg text-center">
					<div className=" text-center">
					
					</div>
                    <a href={"/view-moredetails/"+people.id} className="aa"><img className="avathar" src={people.companyimg} ></img></a>
					<br/><br/>
                    <a href={"/view-moredetails/"+people.id} className="aa"><h3>{people.companyname}</h3></a>
					<Button variant="h5" href={"/view-moredetails/"+people.id} >
					People Said </Button>


				</div>
			</div>
			))}
			{/* <!-- End Single Service Item --> */}


		</div> 
        {/* <!-- End row --> */}
	</div>
     {/* <!-- End container --> */}
</section> 
{/* // <!-- End section --> */}
</div>


        )
    }
}export default PeopleHome;
          