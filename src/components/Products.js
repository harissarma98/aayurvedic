import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';

class Products extends React.Component{

   

  render(){
    return(
      <div>
        <Header/>
  {/* <!-- product section --> */}
  <section class="product_section layout_padding">
    
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
    <div class="d-flex justify-content-center">
      <a  style={{ color: "black" }} href="/Linkpage2">
        See More
      </a>
    </div>
  </section>


 {/*  <!-- end product section -->


  <!-- info section --> */}
 {/*  <section class="info_section layout_padding">
    <div class="container layout_padding-top  layout_padding2-bottom">
      <div class="logo-box">
        <a href="index.html">
          <img src="images/info-logo.png" alt=""/>
        </a>
      </div>
      <div class="info_items">
        <a href="">
          <div class="item ">
            <div class="img-box box-1">
              <img src="images/location-white.png" alt="" />
            </div>
            <div class="detail-box">
              <p>
              Ayurveda means ‘knowledge of life’ it is perceived as one of the most ancient and well-documented systems of medicine.
           Check here some quotes about Ayurveda and the Ayurvedic lifestyle.
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div class="item ">
            <div class="img-box box-3">
              <img src="images/envelope-white.png" alt="" />
            </div>
            <div class="detail-box">
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div class="item ">
            <div class="img-box box-2">
              <img src="images/telephone-white.png" alt="" />
            </div>
            <div class="detail-box">
              <p>
                +02 1234567890
              </p>
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>
   */}

 {/*  <!-- end info_section --> */}
 <Footer/>
      </div>
    )
  }
}
export default Products