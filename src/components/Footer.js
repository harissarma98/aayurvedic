import React, {Component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>

<section className="info_section">
    <div className="container" style={{display: "inline"}} >
       <div className=" ">
        <a href="index.html">
          <img src="html to react/images/info-logo.png" alt=""/>
        </a>
      </div> 
      <div className="info_items">
        <a href="">
          <div className="item ">
            <div className="img-box box-1">
              <img src="html to react/images/location-white.png" alt="" />
            </div>
            <div className="detail-box">
              <p>
              NO-84,Nelukulam,Vavuniya.
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="item ">
            <div className="img-box box-1">
              <img src="html to react/images/envelope-white.png" alt="" />
            </div>
            <div className="detail-box">
              <p>
              aayurvedic@gmail.com
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="item ">
            <div className="img-box box-1">
              <img src="html to react/images/telephone-white.png" alt=""/>
            </div>
            <div className="detail-box">
              <p>
                +94242051610
              </p>
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>

  <section className="container-fluid footer_section">
    <p>
      &copy; 2021 All Rights Reserved By SIGMA Comrades
    </p>
  </section>

            </div>
        )
    }
}
export default Footer