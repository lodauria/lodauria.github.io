import ProjectCard from "../components/ProjectCard";
import { Col, Container, Row } from "react-bootstrap";

function ProjectsPage() {
  return (
    <Container>
      <Row md={4}>
        <Col md={4}>
          <ProjectCard
            title="Internet of Things individual project"
            date="July 2021"
            postName="IoT_Individual_Project"
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            title="Internet of Things group project"
            date="July 2021"
            postName="IoT_Group_Project"
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            title="Interactive Graphics group project"
            date="July 2020"
            postName="IG_Project_Robohand"
          />
        </Col>
      </Row>
      <Row md={4}>
        <Col md={4}>
          <ProjectCard
            title="Audio Speed Up Android app"
            date="April 2020"
            postName="AudioSpeedUp"
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            title="Lego car controlled with IR"
            date="March 2018"
            postName="IRCar_Lego_Arduino"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectsPage;
