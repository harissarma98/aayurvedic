import React, {Component} from 'react'
import ApiService from '../service/PeoplesaidService'

// import './App.css'



class Peoplesaid extends Component {
   constructor(props){
      super(props)
      this.state={
         id:'',
         companyname:'',
         peopleimg1:'',
         peopleimg2:'',
         peopleimg3:'',
         peoplename1:'',
         peoplename2:'',
         peoplename3:'',
         status1:'',
         status2:'',
         status3:'',
         description1:'',
         description2:'',
         description3:'',
         companyimg:''
      }
      }
      componentDidMount() {
         console.log("hiiiiii");
         
         
         const userId = this.props.match.params.id;
         console.log(userId);
         
         ApiService.fetchUserById(userId)
         
         .then((res) => {
         let peoplesaid = res.data;
         this.setState({
            id: peoplesaid.id, 
            companyname: peoplesaid.companyname, 
            peopleimg1: peoplesaid.peopleimg1, 
            peopleimg2: peoplesaid.peopleimg2, 
            peopleimg3: peoplesaid.peopleimg3, 
            peoplename1: peoplesaid.peoplename1, 
            peoplename2: peoplesaid.peoplename2, 
            peoplename3: peoplesaid.peoplename3, 
            status1: peoplesaid.status1, 
            status2: peoplesaid.status2, 
            status3: peoplesaid.status3, 
            description1: peoplesaid.description1, 
            description2: peoplesaid.description2, 
            description3: peoplesaid.description3, 
            companyimg: peoplesaid.companyimg 
         })
      });
      } 
            

   render() {
       return (
          <>
       <div>
 <section id="main-container" class="main-container" key={this.state.id}>
   <div class="container">
      <div class="row text-center">
         <div class="col-12">
            <h3 class="section-sub-title mb-4">{this.state.companyname}</h3>
         </div>
      </div>
     </div>

      <div class="row">
         <div class="col-lg-4 col-md-6">
            <div class="quote-item quote-border mt-5">
               <div class="quote-text-border">
                {this.state.description1}
               </div>

               <div class="quote-item-footer">
                  <img loading="lazy" class="testimonial-thumb" src={this.state.peopleimg1} alt="testimonial"/>
                  <div class="quote-item-info">
                     <h3 class="quote-author">{this.state.peopleimg1}</h3>
                     <span class="quote-subtext">{this.state.status1}</span>
                  </div>
              
              
               </div>
               </div>
             
         </div>
         

         <div class="col-lg-4 col-md-6">
            <div class="quote-item quote-border mt-5">
               <div class="quote-text-border">
                  {this.state.description2}
               </div>

               <div class="quote-item-footer">
                  <img loading="lazy" class="testimonial-thumb" src={this.state.peopleimg2} alt="testimonial"/>
                  <div class="quote-item-info">
                     <h3 class="quote-author">{this.state.peopleimg2}</h3>
                     <span class="quote-subtext">{this.state.status2}</span>
                  </div>
               </div>
            </div>
         </div>

         <div class="col-lg-4 col-md-6">
            <div class="quote-item quote-border mt-5">
               <div class="quote-text-border">
                {this.state.description3}
               </div>

               <div class="quote-item-footer">
                  <img loading="lazy" class="testimonial-thumb" src={this.state.peopleimg3} alt="testimonial"/>
                  <div class="quote-item-info">
                     <h3 class="quote-author">{this.state.peopleimg3}</h3>
                     <span class="quote-subtext">{this.state.status3}</span>
                  </div>
            
            
         

      </div>

   </div>
   </div>
   </div>
</section>

</div>
</>
            )
         
      
      }
    }
    export default Peoplesaid; 