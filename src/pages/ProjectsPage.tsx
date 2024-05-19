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
      document.body.style.overflowY = postName === "" ? "unset" : "hidden";
    },
    [setProjPopup]
  );

  return (
    <Container>
      <Row xs={1} md={3} className="g-4" style={{ marginTop: "1rem" }}>
        <Col key={1}>
          <ProjectCard
            title="Internet of Things Individual Project"
            date="July 2021"
            postName="IoT_Individual_Project"
            image="https://raw.githubusercontent.com/lodauria/IoT_Individual_Project/main/src/wiring.jpg"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={2}>
          <ProjectCard
            title="Internet of Things Group Project"
            date="July 2021"
            postName="IoT_Group_Project"
            image="https://raw.githubusercontent.com/lodauria/IoT_Group_Project/main/resources/images/MarinaMonitorPositionExample.png"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={3}>
          <ProjectCard
            title="Interactive Graphics Group Project"
            date="July 2020"
            postName="IG_Project_Robohand"
            image="https://github.com/lodauria/IG_Project_Robohand/raw/main/webpage_screen.png"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={4}>
          <ProjectCard
            title="Audio Speed Up Android App"
            date="April 2020"
            postName="AudioSpeedUp"
            image="https://github.com/lodauria/AudioSpeedUp/raw/master/PlayStore/banner.png"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={5}>
          <ProjectCard
            title="Lego Car Controlled with IR"
            date="March 2018"
            postName="IRCar_Lego_Arduino"
            image="https://github.com/lodauria/IRCar_Lego_Arduino/raw/master/image.jpg"
            handler={wrapperSetParentState}
          />
        </Col>
        <Col key={6}>
          <ProjectCard
            title="React-based personal website"
            date="August 2023"
            postName="PersonalWebsite"
            image="https://github.com/lodauria/lodauria.github.io/raw/master/screenshot.jpg"
            handler={wrapperSetParentState}
          />
        </Col>
      </Row>
      <ProjectPopup trigger={projPopup} handler={wrapperSetParentState} />
    </Container>
  );
}

export default ProjectsPage;
