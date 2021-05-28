import React, {Component} from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Home extends React.Component{
    render(){
        return(
            <div>
             <Header/>
   {/*  <!-- hero section -->  */}
   
    {/* <!-- end hero section --> */}
 
  {/* <!-- end hero area --> */}


 {/*  <!-- about section --> */}
  <section class="about_section layout_padding">
    <div class="about_container">
      <div class="container">
        <div class="detail">
          <h2 class="custom_heading">
            About Us
          </h2>
          <p>
          Ayurveda means ‘knowledge of life’ it is perceived as one of the most ancient and well-documented systems of medicine.
           Check here some quotes about Ayurveda and the Ayurvedic lifestyle.
          </p>
          <div class="d-flex justify-content-center">
            <a style={{ color: "black" }} href="http://www.ayurveda.gov.lk/">
              Read More
            </a>
          </div>
        </div>
        <div class="detail-2">
          <p>
          Life (ayu) is the combination (samyoga) of body, senses, mind, and reincarnating soul.
           Ayurveda is the most sacred science of life, beneficial to humans both in this world and the world beyond.”
          </p>
        </div>
      </div>
    </div>
  </section>


  {/* <!-- end about section -->

  <!-- product section --> */}
  <section class="product_section layout_padding">
    <div class="d-flex justify-content-center">
      <h2 class="custom_heading">
        Our Products
      </h2>
    </div>
    <div class="container layout_padding2">
      <div class="img-box box-1">
        <img src="html to react/images/p-1.jpg" alt=""/>
      </div>
      <div class="img-box box-2">
        <img src="html to react/images/p-2.jpg" alt=""/>
      </div>
      <div class="img-box box-3">
        <img src="html to react/images/p-3.jpg" alt=""/>
      </div>
      <div class="img-box box-4">
        <img src="html to react/images/p-4.jpg" alt=""/>
      </div>
    </div>
    <div  class="d-flex justify-content-center">
      <a  style={{ color: "black" }} href="/Linkpage2">
        See More
      </a>
    </div>
  </section>


 {/*  <!-- end product section -->

  <!-- why section --> */}

  <section class="why_section layout_padding">
    <div class="container">
      <div class="d-flex flex-column align-items-center text-center">
        <h2 class="custom_heading ">
          Why choose Us
        </h2>
        <p class="">
        The great thing about Ayurveda is that its treatments always yield side benefits, not side effects.” 
        </p>
      </div>
    </div>
    <div class="why_container my-4">
      <div class="img_box">
        <img src="html to react/images/why-img.jpg" alt=""/>
      </div>
    </div>
   {/*  <div style={{ color: "black" }}  class="d-flex justify-content-center">
      <a  style={{ color: "black" }} href="http://www.ayurveda.gov.lk/">
        Read More
      </a>
    </div> */}
  </section>

  {/* <!-- end why section -->



  <!-- contact section --> */

  /* <!-- info section --> */}
   <Footer/>
    </div>
        )
    }
}
export default Home