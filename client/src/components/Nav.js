import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
  import Sidebar from "react-sidebar";
  import axios from 'axios'




import './css/nav.css';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

      
      viewHandler = async () => {
        axios("/pdf", {
          method: "GET",
          responseType: "blob"
          //Force to receive data in a Blob Format
        })
          .then(response => {
            //Create a Blob from the PDF Stream
            const file = new Blob([response.data], {
              type: "application/pdf"
            });
            //Build a URL from the file
            const fileURL = URL.createObjectURL(file);
            //Open the URL on new Window
            window.open(fileURL);
          })
          .catch(error => {
            console.log(error);
          });
      };
    

    render() {
        const show = (this.state.menu) ? "show" : "";
        

        return (
<React.Fragment>
<Sidebar
        children =""
        sidebar={<div>
        <p><Link to="/" className="nav-link " style={{ color: "black" }} >Home</Link> </p>
        <p> <Link to="/projects" className="nav-link " style={{ color: "black" }}>Projects </Link> </p>
        <p><Link to="/education" className="nav-link " style={{ color: "black" }} > Education </Link></p>
        <p><Link to="/contact" className="nav-link " style={{ color: "black" }} > Contact </Link> </p>
        </div>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", paddingLeft: "5%", paddingRight:"5%"  } }}
        
      >
        
  
        {/* <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button> */}
      </Sidebar>
  
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow ">
  
              <button className="btn btn-link d-md-none rounded-circle mr-3" onClick={() => this.onSetSidebarOpen(true)}>
                <i className="fa fa-bars"></i>
              </button> 
  
              {/* <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </button>
   */}        <a href="https://www.ahmad-ali.co.uk/">
   
{/* 
              <img id="log_img" src="https://dl.dropbox.com/s/zyq0fiawa4qclhk/wpp_DCIlGACuT2.png?dl=0" 
              alt="Ahmad-Ali-ahmad-ali-logo-Uk" /> */}
               <img id="log_img" src={process.env.PUBLIC_URL+ "/imgs/logo.png"} 
              alt="Ahmad-Ali-ahmad-ali-logo-Uk" />
              {/* <img id="log_img" src="https://dl.dropbox.com/s/2du08hmcfnaqv4p/logo.png?dl=0" 
              alt="Ahmad-Ali-ahmad-ali-logo-Uk" /> */}
              </a>
  
              <ul className="nav navbar-nav ml-auto hidden-xs d-none d-md-block">
                <div className={"collapse navbar-collapse " + show}>
                  <div className="navbar-nav">
                    <li className="nav-item dropdown no-arrow d-sm-none"></li>
  
                    <li className="nav-item dropdown no-arrow mx-1" > <Link to="/" className="nav-link dropdown-toggle" style={{ color: "black" }} >Home</Link></li>

                    <li className="nav-item dropdown no-arrow mx-1"><Link onClick={this.viewHandler} className="nav-link " style={{ color: "black" }} > view CV  </Link> </li>

  
                    <li className="nav-item dropdown no-arrow mx-1"> <Link to="/projects" className="nav-link dropdown-toggle" style={{ color: "black" }}>Projects </Link> </li>
  
                    <li className="nav-item dropdown no-arrow mx-1"><Link to="/contact" className="nav-link dropdown-toggle" style={{ color: "black" }} > Contact </Link> </li>
  
                    <li className="nav-item dropdown no-arrow mx-1"><Link to="/education" className="nav-link dropdown-toggle" style={{ color: "black" }} > Education </Link> </li>
  
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" target ="_blank " href="mailto:aallii300300@gmail.com" title="Send Me a message">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                        <img className="img-profile rounded-circle" src={process.env.PUBLIC_URL+ "/imgs/email.png"}
                        alt="Ahmad-Ali-ahmad-ali-logo-Uk"
                         /></a> </li>
  
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="tel:+447383164194" title="Call me">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                        <img className="img-profile rounded-circle" src={process.env.PUBLIC_URL+ "/imgs/phone.png"} /></a> </li>
                  </div>
                </div>
  
              </ul>
  
            </nav>
            </React.Fragment>

            );
    }
}

export default Intro;
