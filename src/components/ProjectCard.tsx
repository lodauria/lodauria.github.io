import Card from "react-bootstrap/Card";

interface Props {
  title: string;
  date: string;
  image?: string;
  postName: string;
  handler: any;
}

function ProjectCard({
  title,
  date,
  image = "img/proj-default.jpg",
  postName,
  handler,
}: Props) {
  return (
    <Card className="project-card">
      <Card.Img variant="top" className="image-card" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <i>[{date}]</i>
        </Card.Text>
        <button className="button-card" onClick={() => handler(postName)}>
          Show
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
