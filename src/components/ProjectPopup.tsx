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

export default ProjectPopup;
