import Card from "react-bootstrap/Card";

interface Props {
  title: string;
  date: string;
  postName: string;
}

function ProjectCard({ title, date, postName }: Props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <a href={"/post/" + postName}>{title}</a>
        </Card.Title>
        <Card.Text>
          <i>[{date}]</i>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
