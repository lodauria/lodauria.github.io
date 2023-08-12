import { Container } from "react-bootstrap";
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
      <div>
        <CloseButton className="close-button" onClick={() => handler("")} />
      </div>
      <Container className="popup-container">{SelectPost(trigger)}</Container>
    </div>
  );
}

export default ProjectPopup;
