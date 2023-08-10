import { Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

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
      <Container className="popup-container">
        <div>
          <h1>Popup {trigger}</h1>
        </div>
        <div>
          <CloseButton onClick={() => handler("")} />
        </div>
      </Container>
    </div>
  );
}

export default ProjectPopup;
