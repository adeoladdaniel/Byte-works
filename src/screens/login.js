import React from "react";
import Seo from "../shared/Seo";
import {Col, Container, Row} from "react-bootstrap"
import Navigation from "../shared/Navigaion";
import { Link } from 'react-router-dom';


function Login() {
  return (
    <React.Fragment>
      <Seo page="Login">
          <div className="coloring">

          <div className="signup-header">
        

        <img  className="signup-logo" src="./asset/img/LurisBytee.png"/>

      

      </div>

          <Container>
                                        <Row>
                                                <Col md={6} >
                                                        <img
                                                        src="./asset/img/login.png"
                                                        alt="signup"
                                                        className="signup-img"
                                                        />
                                                </Col>


                                                <Col md={6} style={{zIndex:"20"}}>
                                                    <div className="dime">
                                                       <Link to="/signup"> <button> Signup</button></Link>
                                                       <Link to="/"> <button> Explore</button></Link>

                                                    </div>

                                                    <div className="login-text">
                                                            <h3>Welcome !</h3>
                                                        <p>signin into your account</p>
                                                    </div>

                                                    <div className="use"> 
                                                    <p>Username <img src="./asset/img/Grouper.png" /> </p>
                                                    <input>
                                                    {/* <img src="./asset/img/Vector.png" /> */}
                                                    </input>
                                                    <br/> <br/> 
                                                    <p>Password  <img src="./asset/img/Groupest.png" /> </p> 
                                          
                                                    <input type="password"/>
                                                    <br/>  <br/>  

                                                    <p style={{position:"absolute" ,right:"0"}}>Forgot password?</p>


                                                    <button className="log-but">
                                                        Login
                                                    </button>
                                                    <br/><br/><br/>

                                                    <p style={{textAlign:"center"}}><img src="./asset/img/gpp.png"/> Help and support</p>

                                                    <br/><br/><br/>

                                                    <div className="icons">
                                                        <img src="./asset/img/opg.png"/>
                                                        <img src="./asset/img/Group.png"/>
                                                        <img src="./asset/img/opp.png"/>
                                                        <img src="./asset/img/kpk.png"/>

                                                    </div>
                                                    <br/><br/><br/>

                                                    </div>

                                                    
                                                    
                                                </Col>
                                        </Row>
                            </Container>

         
              <div className="mind">
      <header>
       
        </header>

      <div className="signup-sec">
                           
                    </div>
                    </div>
                        
                    </div>
      </Seo>
    </React.Fragment>
  );
}
export default Login;
