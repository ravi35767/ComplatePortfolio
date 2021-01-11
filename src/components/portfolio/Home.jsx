import React, {Component} from "react";
import SideBar from "./SideBar";
import MainContact from "./MainContact";
import MyProjects from "./MyProjects";
import Footer from "./Footer";
class Home extends Component {
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
                    <MyProjects/>
                
                </div>
                </div>
                <br />
                <Footer/>
            </div>
        );
    }
}
 
export default Home;