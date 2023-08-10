import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface Props {
  title: string;
  description: string;
  date: string;
  image: string;
  postName: string;
  handler: any;
}

function ProjectCard(props: Props) {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          <i>[{props.date}]</i>
        </Card.Text>
        <Button
          className="button-card"
          onClick={() => props.handler(props.postName)}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
