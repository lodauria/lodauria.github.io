import { Col, Container, Row, Image } from "react-bootstrap";
import ExtLinkButton from "../components/ExtLinkButton";

function HomePage() {
  return (
    <Container>
      <Row md={3} className="row-header d-flex align-items-center">
        <Col md={5} className="col-image d-flex align-items-center">
          <Image
            src="img/profile_pic.jpg"
            alt="Profile picture"
            fluid
            className="profile-image"
          />
        </Col>
        <Col md={5} className="col-details">
          <Row>
            <h1 style={{ marginTop: "1rem" }}>Lorenzo D'Auria</h1>
            <p>
              Welcome to my personal website, here you can find some information
              about me and the projects I am most proud of.
            </p>
          </Row>
          <Row className="button-container">
            <Col md="auto">
              <ExtLinkButton
                href="https://github.com/lodauria"
                text="GitHub"
                social="github"
                align="center"
              />
            </Col>
            <Col md="auto">
              <ExtLinkButton
                href="https://www.linkedin.com/in/lorenzodauria"
                text="LinkedIn"
                social="linkedin"
                align="center"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row md={9} style={{ marginBottom: "5%" }}>
        <h1>About me</h1>
        <p>
          I am Lorenzo D’Auria, born in Trieste (Italy) in 1997. At the end of
          my bachelor’s degree in Engineering in Electronics and Computer
          Science, I have understood that automation engineering is the IT topic
          I am most interested in. Therefore for my thesis work, I have chosen
          to develop from scratch a self-balanced inverted pendulum using a
          reaction wheel.
        </p>
        <p>
          Following my passions, I have then moved to Rome to study robotics
          during my master’s degree. The experience of living on my own made me
          grow from a personal point of view, while the more practical approach
          found at Sapienza University allowed me to refine other important
          skills such as teamwork, self-reliance, organization, and English as
          well. For my master thesis, I have decided to work on the development
          of an innovative safe navigation algorithm for UAVs obtaining very
          satisfactory results.
        </p>
        <p>
          During 2022, I worked for Alten Italia as a System Engineer. More
          specifically, I was a part of the Leonardo Avionic Sensors Simulation
          team in Ronchi dei Legionari (GO), Italy as an external consultant. I
          was involved in the development of real-time systems for flight
          simulators, and I mainly worked with Visual Studio, GitLab, and the Qt
          Framework.
        </p>
        <p>
          From January 2023 I am employed at Fincantieri, where I am part of the
          Digital Innovation team for the study and development of new solutions
          in the fields of Robotics, AI and IoT, with the goal of improving the
          shipyard efficiency and security. I mainly work with Python, C++, ROS,
          Azure, Git and Unix in general.
        </p>
      </Row>
    </Container>
  );
}

export default HomePage;
