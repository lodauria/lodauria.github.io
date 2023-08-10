import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  date: string;
  image: string;
  postName: string;
}

function ProjectCard({ title, description, date, image, postName }: Props) {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <i>[{date}]</i>
        </Card.Text>
        <Link to={postName}>
          <Button className="button-card">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
