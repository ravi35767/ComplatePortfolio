import React, { Component } from "react";
import ProfileImage from "../../assets/images/banner1.jpeg";
import { Link } from "react-router-dom";
class SideBar extends Component {
    render() { 
        return ( 
            <div className="sidenav">
                <img src={ProfileImage} alt="" className="rounded-circle profileCircle ml-5 "/>
                <h3 className="text-light ml-4 mt-2">Ravi Shankar</h3>
                
            <div className="profile mr-5 ">
                <div class="social-links mt-3 text-center">
                    <a href="https://twitter.com/VickeyMalhi1" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100008407607964" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://github.com/ravi35767" className="instagram"><i className="fa fa-github"></i></a>
                    <a href="https://secure.skype.com/portal/overview" className="google-plus"><i className="fa fa-skype"></i></a>
                    <a href="https://www.linkedin.com/in/ravi-shankar-3937a7105/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
            <nav className="nav-menu mt-4">
                <ul className="">
                    <li className="active"><a href="/"><i className="fa fa-home" /> <span className="ml-2">Home</span></a></li>
                    <li ><a href="/About"><i className="fa fa-user" /> <span className="ml-2">About</span></a></li>
                    <li ><a href="/Resume"><i className="fa fa-file" /> <span className="ml-2">Resume</span></a></li>
                    <li><a href="/skills"><i className="fa fa-book" /> <span className="ml-2">Skills</span></a></li>
                    <li><a href="/Services"><i className="fa fa-server" /><span className="ml-2"> Services</span></a></li>
                    <li><a href="/Contact"><i className="fa fa-envelope" /><span className="ml-2"> Contact</span></a></li>
                </ul>
            </nav>
            
            </div>
         );
    }

}
export default SideBar;