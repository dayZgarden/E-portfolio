import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dayzTracker from "../assets/img/nutrify.png";
import dayZgamer from "../assets/img/Playerone.png";
import tictactoe from "../assets/img/tictactoe.png";
import googleClone from "../assets/img/google-clone.png";
import twitterClone from "../assets/img/twitter-clone.png";
import huluClone from "../assets/img/hulu-clone.png";
import Library from "../assets/img/Library.png";
import ClientEport from "../assets/img/clientEport.png";
import car from "../assets/img/car.png";
import ClientEport1 from "../assets/img/clientEport1.png";
import ClientEport2 from "../assets/img/clientEport2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import likewhy from "../assets/img/likewhy.png";
import TrackVisibility from 'react-on-screen';
import pf from "../assets/img/pf.png";
import eldernet from "../assets/img/eldernet.png";
import freightify from "../assets/img/freightify.png";

export const  Projects = () => {

  const  projects = [
    {
      title: "Perplexed",
      description: "Fullstack trivia game built with React, Node.js, TailwindCSS, and Firebase + Firestore backend services and database.",
      imgUrl: likewhy,
      githubUrl: "https://github.com/dayZgarden/dayZtrivia",
      demoUrl: "https://day-ztrivia.vercel.app/",
    },
    {
      title: "Player One",
      description: "Fully responsive Videogame Catalog application utilizing the RAWG API. Developed with React, Node.js, and TailwindCSS.",
      imgUrl: dayZgamer,
      githubUrl: "https://github.com/dayZgarden/dayZgamer",
      demoUrl: "https://day-zgamer.vercel.app/",
    },
    {
      title: "Nutrify",
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
      title: "Freightify",
      description: "React application developed with TailwindCSS to create a responsive and interactive UI for a freight company.",
      imgUrl: freightify,
      githubUrl: "https://github.com/dayZgarden/Self-Driving-Car",
      demoUrl: "https://github.com/dayZgarden/Freightify",
    },
    {
      title: "Non-Profit Website",
      description: "React Application developed with TailwindCSS to create a responsive and interactive UI for a non-profit organization.",
      imgUrl: pf,
      githubUrl: "https://github.com/dayZgarden/non-profit",
      demoUrl: "https://non-profit.vercel.app/",
    },
    {
      title: "ElderNet",
      description: "React application developed with TailwindCSS to create a responsive and interactive UI for a client.",
      imgUrl: eldernet,
      githubUrl: "https://github.com/dayZgarden/Eldernet",
      demoUrl: "https://eldernet.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe",
      description: "Tic-Tac-Toe game developed with Next.js, TypeScript, and TailwindCSS best practises using game logic and events to operate.",
      imgUrl: tictactoe,
      githubUrl: "https://github.com/dayZgarden/ticTacToe",
      demoUrl: "https://tictactoe-swart.vercel.app/",
    },
    {
      title: "Self-Driving Car",
      description: "HTML canvas manipulated with JavaScript creating a self-driving car utilizing a neural network, collisions, sensors, and local storage.",
      imgUrl: car,
      githubUrl: "https://github.com/dayZgarden/Self-Driving-Car",
      demoUrl: "https://self-driving-car-zkah.vercel.app/",
    },
    {
      title: "Client E-Portfolio",
      description: "Incorporated Three.js to create a 3D interactive portfolio. Developed with CSS3 + HTML5 best practises.",
      imgUrl: ClientEport,
      githubUrl: "https://github.com/dayZgarden/firstThreeJs",
      demoUrl: "https://first-three-js.vercel.app/",
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
                      <Nav.Link eventKey="first">Creative Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Client Portfolios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Professional Clones</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0,9).map((project, index) => {
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
                          projects.slice(9,12).map((project, index) => {
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
                          projects.slice(12,15).map((project, index) => {
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
