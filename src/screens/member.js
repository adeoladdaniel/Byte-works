import React from "react";
import Seo from "../shared/Seo";
import Navigation from "../shared/Navigaion";
import { Container,Row,Col } from "react-bootstrap";

function Member() {
  return (
    <React.Fragment>
      <Seo>
        <header>
          <div>
            <Navigation />

            

          </div>
        </header>

        <section>
                <Container>

                    <Row>
                            <Col md="6"> 

                                        <div className="member-card">
                                            <button className="edit-bute">online</button>
                                            <div className="a-sec">
                                                <h1>A</h1>
                                                <h4 style={{marginTop:"3rem"}}>Adeoladaniel 33344</h4>
                                            </div>
                                           <button className="edit-but">edit profile</button>
                                        </div>

                                        <div className="member-cardd">
                                                <p style={{padding:"1rem"}}> Description<b style={{position:"absolute",right:"11rem", color:"#016E99"}}>edit description</b></p>
                                                <hr/>
                                                <p style={{padding:"1rem"}}> Languages   <b style={{position:"absolute",right:"11rem",color:"#016E99"}}>+ Add new</b></p>
                                                <hr/>
                                                <p style={{padding:"1rem"}}> Skill   <b style={{position:"absolute",right:"11rem" ,color:"#016E99"}}>+ Add new</b></p>
                                                <hr/>
                                                <p style={{padding:"1rem"}}>Education  <b style={{position:"absolute",right:"11rem" ,color:"#016E99"}}>+ Add new</b></p>
                                                <hr/>
                                                <p style={{padding:"1rem"}}>Certifiaction   <b style={{position:"absolute",right:"11rem" ,color:"#016E99"}}>+ Add new</b></p>
                                                <hr/>
                                                
                                        </div>
                            </Col>

                            <Col md="6"> 
                                <div className="input-side">
                                    <input placeholder="First Name"/> <input placeholder="Last Name"/>
                                    <br/> <br/><br/>
                                    <input type="number" placeholder="Practicing licence number" /> <input  type="number" placeholder="Year of accreditation"/>
                                    <br/> <br/><br/>
                                    <input type="number" placeholder="Practicing licence number" /> <button className="edit"> edit password</button>

                                    <button className="save">Save</button>

                                </div>

                                <div className="promotion">
                                        <h1>Promotions with</h1>
                                        <br/><br/><br/>
                                        <img  src="./asset/img/LurisBytee.png"/>

                                        <br/><br/><br/>

                                        <p>Promote your service to get more people to view your profile and get more engagemenst</p>
                                </div>
                            </Col>
                    </Row>
                </Container>

        </section>
      </Seo>
    </React.Fragment>
  );
}
export default Member;
