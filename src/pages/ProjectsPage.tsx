import { useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import CloseButton from "react-bootstrap/CloseButton";
import SelectPost from "../pages/AllPosts";

interface ProjectPopupProps {
  trigger: string;
  handler: any;
}

function ProjectPopup({ trigger, handler }: ProjectPopupProps) {
  return trigger === "" ? (
    <></>
  ) : (
    <div
      className="popup-project"
      id="69"
      onClick={(event) => {
        if ((event.target as HTMLElement).id === "69") {
          handler("");
        }
      }}
    >
      <div className="popup-container">
        <CloseButton onClick={() => handler("")} />
        {SelectPost(trigger)}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [projPopup, setProjPopup] = useState("");

  const wrapperSetParentState = useCallback(
    (postName: string) => {
      setProjPopup(postName);
      document.body.style.overflow = postName === "" ? "unset" : "hidden";
    },
    [setProjPopup]
  );

  return (
    <Container>
      <Row xs={1} md={3} className="g-4" style={{ marginTop: "2rem" }}>
        <Col key={1}>
          <ProjectCard
            title="Internet of Things individual project"
            description="description"
            date="July 2021"
            image=""
            postName="IoT_Individual_Project"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={2}>
          <ProjectCard
            title="Internet of Things group project"
            description="description"
            date="July 2021"
            image=""
            postName="IoT_Group_Project"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={3}>
          <ProjectCard
            title="Interactive Graphics group project"
            description="description"
            date="July 2020"
            image=""
            postName="IG_Project_Robohand"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={4}>
          <ProjectCard
            title="Audio Speed Up Android app"
            description="description"
            date="April 2020"
            image=""
            postName="AudioSpeedUp"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={5}>
          <ProjectCard
            title="Lego car controlled with IR"
            description="description"
            date="March 2018"
            image=""
            postName="IRCar_Lego_Arduino"
            handler={wrapperSetParentState}
          />
        </Col>
      </Row>
      <ProjectPopup trigger={projPopup} handler={wrapperSetParentState} />
    </Container>
  );
}

export default ProjectsPage;
