import React, { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';





function Index() {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <React.Fragment>
    
                    <div className="signup-sec">
                            <Container>
                                        <Row>
                                                <Col md={6} >
                                                        <img
                                                        src="./asset/img/signupp.png"
                                                        alt="signup"
                                                        className="signup-img"
                                                        />
                                                </Col>


                                                <Col md={6} >
                                                    <div className="signup-input">
                                                         <input placeholder="Full Name"/>
                                                        <br/><br/><br/>
                                                        <input type="email" placeholder="Email"/>
                                                        <br/><br/><br/>
                                                        <input type="number" placeholder="Practicing licence number"/>
                                                        <br/><br/><br/>
                                                        <p>Year of accreditation</p>
                                                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                                        <br/><br/><br/>
                                                        <input type="password" placeholder="Password"/>
                                                        <br/><br/><br/>

                                                        <input type="password" placeholder="Confirm Password"/>
                                                        <br/>
                                                        <br/>
                                                        <div style={{display:"flex"}}>
                                                        <img src="./asset/img/imgg.png"/>
                                                        <input type="file"
                                                        id="avatar" name="avatar"
                                                        accept="image/png, image/jpeg"
                                                        style={{padding:"1rem"}}
                                                        />
                                                        </div>
                                                        <button className="register">
                                                            Register
                                                        </button>
                                                        <br/>

                                                        <p>already have an account <Link className="log" to="/login"> Log in </Link></p>
                                                        



                                                        
                                               
                                                    </div>
                                                      
                                                </Col>
                                        </Row>
                            </Container>
                    </div>
                  
    </React.Fragment>
  );
}
export default Index;
