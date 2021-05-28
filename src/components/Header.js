import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
             <div  style={{ height: "40rem" }} className="hero_area">
    <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
        <Link to="/" className="navbar-brand">
          <img src="html to react/images/logo.png" alt="" />
          <span>
            Medi
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link" href="Home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Doctors"> Doctors </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Linkpage2"> Products </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <section className="hero_section">
      <div className="hero_detail">
        <h1>
          <span>
            A
          </span>
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
            I
          </span>
          <span>
            C
          </span>
        </h1>
        <h3>
          Natural product
          </h3>
      </div>
      <div  className="hero_btn-box">
        <a style={{ color: "red" }}  href="/Contact">
          Contact Us
        </a>
        {/* <li className="nav-item">
              <a className="btn btn-outline-light " href="https://web.whatsapp.com/send?phone=94766398551&text=Hey%20E.P.R!" target="_blank">
                <i class='fab fa-whatsapp-square' style={{fontSize:"40px"}}>
                  </i>
                  </a> 
              </li> */}
      </div>
    </section>
  </div>    
        )
    }
}
export default Header