import React, {Component} from "react";
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
         
             <div className="container-fluid">
                <div className="row">
                <div className="col-md-5">
                    
                </div>
                <div className="col-md-9">
                    {/* <div className="row">
            <div className="col-md-12"> */}
             
            {/*Footer */}
        <footer className="page-footer font-small stylish-color-dark pt-4 bg-dark text-white">
          {/* Footer Links */}
          <div className="container text-center text-md-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-4 mx-auto">
                {/* Content */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                <p className="text-justify">
                  This is my personal portfolio website, just take a tour and have a look at this site feel
                  free to contact me if you need any assistance from me. Happy coding
                </p>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
             
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Social Links</h5>
                <ul className="list-unstyled">
                  <li>
                  <a href="https://twitter.com/VickeyMalhi1" className="twitter "><i className="fa fa-twitter">&nbsp; &nbsp;Twitter</i></a>

                  </li>
                  <li>
                  <a href="https://www.facebook.com/profile.php?id=100008407607964" className="facebook"><i className="fa fa-facebook">&nbsp;&nbsp;Facebook</i></a>

                  </li>
                  <li>
                  <a href="https://github.com/ravi35767" className="instagram"><i className="fa fa-github"></i>&nbsp;&nbsp; Github</a>

                  </li>
                  <li>
                  <a href="https://secure.skype.com/portal/overview" className="google-plus"><i className="fa fa-skype"></i>&nbsp;&nbsp; Skype</a>

                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/ravi-shankar-3937a7105/" className="linkedin"><i className="fa fa-linkedin"></i>&nbsp;&nbsp; Linkedin</a>


                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 ml-2 mx-auto">
                {/* Links */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contact</h5>
                <ul className="list-unstyled">
                  <li>
                    <p>karachi, Pakistan</p>
                  </li>
                  <li>
                    <p>ravishankar.malhi1@gmail.com</p>
                  </li>
                  <li>
                    <p>+923362484360</p>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          {/* Footer Links */}
          <hr />
          {/* Copyright */}
          <div className="footer-copyright text-center py-3">
            © <span id="year" /> Copyright | Ravi Shankar
          </div>
          {/* Copyright */}
        </footer>
                </div>
                </div>
            </div> 
         
            
         );
    }
}
 
export default Footer;