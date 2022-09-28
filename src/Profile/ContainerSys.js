import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./Profile";
import apis from "../Data/api";
function ContainerSys() {
  return (
    <>
      <Container>
        <Row>
        {apis.map(({ fullName, imgURL, profession, bio }) => (
            <Col>
              <Profile
                fullName={fullName}
                imgURL={imgURL}
                profession={profession}
                bio={bio}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ContainerSys;