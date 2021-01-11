import React, {Component} from "react";
import SideBar from "./SideBar";
import MainContact from "./MainContact";
import Footer from "./Footer";
class ContactUs extends Component {
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
                <div className="mt-5 " id="contactBox">
            <div className="col-md-12 text-center">
              <h1>Contact US</h1>
            </div>
          <div className="row w-50 text-center mx-auto">
            <div className="col-md-12 text-center">
              <p>
              Me and my team are providing an excellent service to our customers,
            we are also providing solutions and services on freelancing websites
            like fiverr or freelancer.We also helps you in your academic projects or assignments,
            if you stuck in any point just contact us we will help you.
              </p>
            </div>
          </div>

          <div className="row w-50 mx-auto mb-5 mt-4">
            <div className="col-md-12">
            <form action="">
              <div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="first name">First Name *</label>
                    <input
                      id="first name"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name = "first_name"
                      
                      required
                      
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="last name">Last Name *</label>
                    <input
                      id="last name"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name = "last_name"
                      value = {this.state.last_name}
                      required
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="your email">Email *</label>
                    <input
                      id="your email"
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name = "user_email"
                        required
                      
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="contact">Contact Number *</label>
                    <input
                      id="contact"
                      type="text"
                      className="form-control"
                      placeholder="Your Number"
                      name = "number"
                     
                      required
                      
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="contact">Subject</label>
                    <input
                      id="contact"
                      type="text"
                      className="form-control"
                      placeholder="Message Subject"
                      name = "number"
                     
                      required
                      
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="description">Message</label>
                    <textarea
                      class="form-control"
                      id="description"
                      rows="3"
                      name = "description"
                      
                      required
                      
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  
                >
                  Send Message
                </button>
              </div>
            </form>
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
 
export default ContactUs;