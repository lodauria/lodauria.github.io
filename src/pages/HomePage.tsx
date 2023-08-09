import { Col, Container, Row, Image } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Row md={3} className="details-header">
        <Col md={2}></Col>
        <Col md={4}>
          <Image src="/logo.jpg" alt="Logo" fluid className="logo-image" />
        </Col>
        <Col md={4} className="side-details">
          <h1> Lorenzo D'Auria</h1>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row md={9}>
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
