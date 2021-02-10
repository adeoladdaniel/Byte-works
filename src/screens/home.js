import React from "react";
import Seo from "../shared/Seo";
import Navigation from "../shared/Navigaion";
import { Container, Col, Row, Carousel } from "react-bootstrap";

function Home() {
  return (
    <React.Fragment>
      <Seo>
        <header>
          <div>
            <Navigation />
          </div>

          
        </header>
        <input className="inputy"/><button className="buty">search</button>
        <section>
          <Container>
                  <Row>
                        <Col md={3}>
                              <div className="memberr-card">
                                  <h3> Hi Adeola</h3>
                                  <p>Get offers from  Users</p>

                                  <button>Post a request</button>
                              </div>
                        </Col>

                        <Col md={9}>
                          <br/><br/><br/>
                        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./asset/img/hello.png"

      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hire a legal Professional</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./asset/img/hello.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hire a legal Professional</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./asset/img/hello.png"

      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hire a legal Professional</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                        </Col>
                  </Row>
          </Container>


<br/><br/><br/>
          <div>
            <h4 style={{padding:"1rem"}}>Top Professionals of the Month<b style={{position:"absolute", right:"1rem"}}>See  All</b></h4>
          </div>
          <br/>
          <div>
              <Container>
                    <Row>
                          <Col md={4}>
                              <div className="proff-card"> 
                                <img src="./asset/img/a.png"/>

                                <h5>
                                Adeola Daniel  <br/><br/>

                                Levl 2 seller <br/><br/>

                                Professional Lawyer <br/>
                                </h5>
                              </div>
                          </Col>
                         
                          <Col md={4}>
                          <div className="proff-card"> 
                                <img src="./asset/img/b.png"/>

                                <h5>
                                Adeola Daniel  <br/><br/>

                                Levl 2 seller <br/><br/>

                                Professional Lawyer <br/>
                                </h5>
                              </div>
                          </Col>
                          <div className="proff-card"> 
                                <img src="./asset/img/c.png"/>

                                <h5>
                                Adeola Daniel  <br/><br/>

                                Levl 2 seller <br/><br/>

                                Professional Lawyer <br/>
                                </h5>
                              </div>
                          <Col md={4}>

                          </Col>
                    </Row>
              </Container>
          </div>
        </section>
      </Seo>
    </React.Fragment>
  );
}
export default Home;
