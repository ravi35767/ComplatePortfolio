import React, { Component } from "react";
import Cv from "../../assets/Resume/Ravi-Resume.pdf";
import SideBar from "./SideBar";
import MainContact from "./MainContact";
import Footer from "./Footer";
class Resume extends Component {
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
                <div className=" myprojectsHandler mt-5">
                    <div className="row mb-5">
                        <div className="container resume mb-2 border border-danger w-50">
                            <h1> Resume</h1>
                            <hr width="70" align="left" />
                            <p>Please download my resume to view.</p>
                            <a className="btn btn-primary mb-3" href={Cv} download>Download Resume</a>
                        </div>

                    </div>
                </div>
                <br />
                <Footer />
            </div>



        );
    }
}

export default Resume;