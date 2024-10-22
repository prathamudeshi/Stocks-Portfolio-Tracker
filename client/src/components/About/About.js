import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  const persondets = {
    // height: "calc((100vh-80px)/2)",
    height: "40vh",
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    margin: "auto auto",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          maxHeight: "calc(100vh-80px)",
        }}
      >
        <div style={persondets}>
          <Card style={{ width: "80vw", marginLeft: "50px" }}>
            {/* <img
              src="curlybraces.svg"
              style={{
                position: "absolute",
                height: "200px",
                width: "500px",
                marginLeft: "calc(35vw - 150px)",
              }}
            ></img> */}
            <Card.Img
              variant="top"
              src="pratham.jpg"
              style={{
                borderRadius: "100%",
                height: "150px",
                width: "120px",
                margin: "auto",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title>Pratham Udeshi</Card.Title>
              <Card.Text>
                <div style={{ marginBottom: "15px" }}>
                  <strong>
                    Year: Third | Batch: D2 | Roll No.: 16010122215
                  </strong>
                </div>
                <div style={{ padding: "15px" }}>
                  Full fledged Software Developer with 3 years of practical
                  experience and 6 months of Industrial Experience. Having
                  successfully managed to pull off nearly 10-12 projects in such
                  a short span he is well known to balance it with his academics
                  having 8.6 avg CGPA and balancing all of these with 2
                  simultaneous internships. In this project, he has contributed
                  in backend, database and a small help in frontend.
                </div>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <div>
                {/* <Link
                  style={{ marginRight: "20px" }}
                  to="https://github.com/prathamudeshi"
                >
                  <img
                    src="github.png"
                    style={{ height: "50px", width: "50px" }}
                  ></img>
                </Link> */}
                <Link
                  style={{ marginRight: "20px" }}
                  to="https://github.com/prathamudeshi"
                >
                  <img
                    src="github.png"
                    style={{ height: "50px", width: "50px" }}
                  ></img>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/pratham-udeshi-8b3890258"
                  style={{ marginRight: "20px" }}
                >
                  <img
                    src="linkedin.png"
                    style={{ height: "50px", width: "50px" }}
                  ></img>
                </Link>
                <Link to="https://prathamu.com" style={{ marginRight: "20px" }}>
                  <img
                    src="prathamportfolio.png"
                    style={{ height: "50px", width: "50px" }}
                  ></img>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div style={persondets}>
          <Card style={{ width: "80vw", marginLeft: "50px" }}>
            <Card.Img
              variant="top"
              src="sakshi.jpg"
              style={{
                borderRadius: "100%",
                height: "150px",
                width: "120px",
                margin: "auto",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title>Sakshi Tipnis</Card.Title>
              <Card.Text>
                <div style={{ marginBottom: "15px" }}>
                  <strong>
                    Year: Third | Batch: D2 | Roll No.: 16010122211
                  </strong>
                </div>
                <div style={{ padding: "15px" }}>
                  An experienced UI/UX Designer with a portfolio of 7-10
                  projects and two internships in the field. She possesses
                  strong skills in analysis and management, making her a
                  well-rounded professional. Along with her practical
                  experience, she has maintained a decent CGPA, reflecting her
                  dedication and consistent academic performance.
                </div>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <div>
              <a
                style={{ marginRight: "20px" }}
                herf="https://github.com/sakshitipnis"
              >
                <img
                  src="github.png"
                  style={{ height: "50px", width: "50px" }}
                ></img>
              </a>
              <a
                herf="https://www.linkedin.com/in/sakshi-tipnis-a6475028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                style={{ marginRight: "20px" }}
              >
                <img
                  src="linkedin.png"
                  style={{ height: "50px", width: "50px" }}
                ></img>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
