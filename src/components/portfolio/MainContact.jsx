import React, {Component} from "react";
import Banner from "../../assets//images/banner.jpg";
class MainContact extends Component {
   render() { 
        return ( 
            <div className="">
                <img src={Banner} className="main"/>
                <div className="centered">
                 <b><h1>Ravi Shankar</h1></b>   
                <h3>
                    <span className="text_1">I'm Web Developer</span>
                    <span className="text_2">I'm Full Stack Developer!</span>
                </h3>
                </div>
                
            </div>
            
         );
    }
}

export default MainContact;