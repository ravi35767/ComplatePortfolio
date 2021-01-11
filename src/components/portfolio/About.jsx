import React, { Component } from "react";
import AboutImage from "../../assets/images/banner1.jpeg";
import SideBar from "./SideBar";
import MainContact from "./MainContact";
import Footer from "./Footer";
class AboutMe extends Component {
  state = {}
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
          <div className=" myprojectsHandler mt-3">
            <div className="row mb-5">
              {/* First Container */}
              <div className="container-fluid whoAmI bg-1 text-center">
                <h3 className="margin">Who Am I?</h3>
                <img src={AboutImage} className="img-responsive rounded-circle margin" style={{ display: 'inline' }} alt="Bird" width={350} height={350} />
                <h3>I'm a Developer</h3>
              </div>
              {/* Second Container */}
              <div className="container-fluid whoAmI bg-2 text-center">
                <h3 className="margin">What Am I?</h3>

                <p className="border border-rounded w-75 text-justify aboutText ">Hello! Myself Ravi Shankar i am 23 years old, i am graduated from Iqra University major Computer science I'm an enthusiast Web developer with excellent technical and communication skills. I love anything that has to do with programming and Web Development.I am a fresher, but I am very hard working person and passionate to gain more and more knowledge. Whatever task I take in my hand, I do with full passion and concentration, and try to complete the task as soon as possible.Currently i am seeking for a opportunity to learn and grow, team oriented and a happy workplace. To know more about me, please go through my Resume.
                I believe in hard working rather than luck. If you are passionate about your work you can do anything you want.
          </p>
                <a href="#" className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-search" />
                </a>
              </div>

            </div>
          </div>
          <br />
          <Footer />
        </div>


    );
  }
}

export default AboutMe;