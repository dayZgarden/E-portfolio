import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dayZtrivia from "../assets/img/dayZtrivia.png";
import dayzTracker from "../assets/img/dayZtracker.png";
import dayZgamer from "../assets/img/dayZgamer.png";
import googleClone from "../assets/img/google-clone.png";
import twitterClone from "../assets/img/twitter-clone.png";
import huluClone from "../assets/img/hulu-clone.png";
import Library from "../assets/img/Library.png";
import ClientEport1 from "../assets/img/clientEport1.png";
import ClientEport2 from "../assets/img/clientEport2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const  Projects = () => {

  const  projects = [
    {
      title: "dayZtrivia",
      description: "Fullstack trivia game built with React, Node.js, TailwindCSS, and Firebase + Firestore backend services and database.",
      imgUrl: dayZtrivia,
      githubUrl: "https://github.com/dayZgarden/dayZtrivia",
      demoUrl: "https://day-ztrivia.vercel.app/",
    },
    {
      title: "dayZgamer",
      description: "Fully responsive Videogame Catalog application utilizing the RAWG API. Developed with React, Node.js, and TailwindCSS.",
      imgUrl: dayZgamer,
      githubUrl: "https://github.com/dayZgarden/dayZgamer",
      demoUrl: "https://day-zgamer.vercel.app/",
    },
    {
      title: "dayZtracker",
      description: "Robust nutrition tracker application using the Nutrionix API. Developed with React, Node.js, and CSS3 + HTML5 best practices.",
      imgUrl: dayzTracker,
      githubUrl: "https://github.com/dayZgarden/dayZtracker_React",
      demoUrl: "https://day-ztracker-react.vercel.app/",
    },
    {
      title: "Library",
      description: "E-Commerce Bookstore developed with React, Node.js, and CSS3 + HTML5 best practises.",
      imgUrl: Library,
      githubUrl: "https://github.com/dayZgarden/React-Bookstore",
      demoUrl: "https://react-bookstore-zeta.vercel.app/",
    },
    {
      title: "Client E-Portfolio",
      description: "Designed and Developed a responsive e-portfolio for a client using React, Node.js, and CSS3 [BEM] + HTML5 best practices.",
      imgUrl: ClientEport1,
      githubUrl: "https://github.com/dayZgarden/ClientEport",
      demoUrl: "https://client-eport.vercel.app/",
    },
    {
      title: "Client E-Portfolio",
      description: "Designed and Developed a responsive e-portfolio for a client using HTML5, CSS3 [BEM], and JavaScript best practices.",
      imgUrl: ClientEport2,
      githubUrl: "https://github.com/dayZgarden/clientPortfolio",
      demoUrl: "https://client-portfolio-eight.vercel.app/",
    },
    {
      title: "Google Clone",
      description: "Clone of Google's search engine using React, Node.js, and CSS3 + HTML5 best practices.",
      imgUrl: googleClone,
      githubUrl: "https://github.com/dayZgarden/Google-clone",
      demoUrl: "https://day-z-search.vercel.app/",
    },
    {
      title: "Hulu Clone",
      description: "Clone of Hulu's video streaming service using Next.js, Node.js, and TailwindCSS best practices.",
      imgUrl: huluClone,
      githubUrl: "https://github.com/dayZgarden/hulu-clone",
      demoUrl: "https://hulu-cloned-mu.vercel.app/",
    },
    {
      title: "Twitter Clone",
      description: "Twitter Clone developed with Twitter Authentication and Sanity using React, Node.js, and CSS3 + HTML5 best practices.",
      imgUrl: twitterClone,
      githubUrl: "https://github.com/dayZgarden/Twitter-clone",
      demoUrl: "https://twitter-clone-steel-one.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> <b> <i>Never lacking creativity & Always thinking of the user</i> </b>  <br /> Take a look at the projects that I have designed & developed with the best practices of HTML5, CSS3 [ BEM ], JavaScript, and React.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0,3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.slice(3,6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.slice(6,9).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
