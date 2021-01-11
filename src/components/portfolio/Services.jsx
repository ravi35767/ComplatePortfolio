import React, {Component} from "react";
import SideBar from "./SideBar";
import MainContact from "./MainContact";
import Footer from "./Footer";
class Services extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="container-fluid">
                <div className="row">
                <div className="col-md-5">
                   <SideBar />   
                </div>
                <div className="col-md-9">
                    <MainContact />
                </div>
                </div>
                <div className=" myprojectsHandler">
                <div className="row mb-5">
                <div className="container">
        <div className="section-title resume ">
          <h2>Services</h2>
          <hr width={112} align="left" />
          <p className="border border-primary p-3">Me and my team are providing an excellent service to our customers,
            we are also providing solutions and services on freelancing websites
            like fiverr or freelancer.We also helps you in your academic projects or assignments,
            if you stuck in any point just contact us we will help you.</p>
        </div>
        <div className="services-card">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="card bg-dark text-light mb-3 border border-primary" style={{maxWidth: '18rem'}}>
                <div className="card-header p-5 text-center">
                  <p className="card-title">Web Development
                  </p>
                  </div>
                  <a href="/Contact" className="btn btn-primary w-100 ">Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card bg-dark text-light mb-3 border border-primary" style={{maxWidth: '18rem'}}>
                <div className="card-header p-5 text-center">
                  <p className="card-title">Semister Projects
                  </p></div>
                  <a href="/Contact" className="btn btn-primary w-100 ">Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card bg-dark text-light mb-3 border border-primary" style={{maxWidth: '18rem'}}>
                <div className="card-header p-5 text-center">
                  <p className="card-title">Assignments
                  </p></div>
                  <a href="/Contact" className="btn btn-primary w-100 ">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="card bg-dark text-light mb-3 border border-primary" style={{maxWidth: '18rem'}}>
                <div className="card-header p-5 text-center">
                  <p className="card-title">Debugging
                  </p></div>
                  <a href="/Contact" className="btn btn-primary w-100 ">Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card bg-dark text-light mb-3 border border-primary" style={{maxWidth: '18rem'}}>
                <div className="card-header p-5 text-center">
                  <p className="card-title">Virtual Machines
                  </p></div>
                  <a href="/ContactUs" className="btn btn-primary w-100 ">Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card bg-dark text-light mb-3 border border-primary" style={{maxWidth: '18rem'}}>
                <div className="card-header p-5 text-center">
                  <p className="card-title">Big Data
                  </p></div>
                    <a href="/Contact" className="btn btn-primary w-100 ">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>    
                
                </div>
                </div>
                <br />
                <Footer/>
            </div>
        
         );
    }
}
 
export default Services;