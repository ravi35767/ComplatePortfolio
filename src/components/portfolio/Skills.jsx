import React, {Component} from "react";
import SideBar from "./SideBar";
import MainContact from "./MainContact";
import Footer from "./Footer";
class Skills extends Component {
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
        <div className="row">
            <div className="col-md-12">

            
        <h1 className="text-center ">My Skills</h1>
        <hr width={250} color="grey" />
        <div className="container mb-5 mt-5">
          <h4 className="bg-light p-3 border border-primary"><b>Programming Languages or Framework</b></h4>
          <div className="row mb-4">
            <div className="col-md-6 p-3">
              <label><b>HTML5</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Core PHP</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}>65%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Laravel</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Python</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}>30%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>jQuery</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>JavaScript</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Bootstrap4</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>70%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>CSS3</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Magento2</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>40%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>MySql</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>70%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>MongoDB</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>40%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>React js</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>45%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Node js</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>40%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Express js</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>40%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Docker</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Kubernetes</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>45%</div>
              </div>
            </div>
          </div>
          {/*   This code prints all IDE's */}
          <h4 className="bg-light p-3 border border-primary"><b>IDE's</b></h4>
          <div className="row mb-4">
            <div className="col-md-6 p-3">
              <label><b>Pycharm</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Visual Studio Code</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>80%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Sublime</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>70%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Phpstrom</b></label>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>70%</div>
              </div>
            </div>
            
          </div>
          {/*   This code prints all Platform's */}
          <h4 className="bg-light p-3 border border-primary"><b>Platforms</b></h4>
          <div className="row mb-4">
            <div className="col-md-6 p-3">
              <label><b>Linux (Ubuntu)</b></label>
              <div className="progress">
                <div className="progress-bar " role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>40%</div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <label><b>Microsoft Windows 10</b></label>
              <div className="progress">
                <div className="progress-bar " role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
              </div>
            </div>
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
 
export default Skills;