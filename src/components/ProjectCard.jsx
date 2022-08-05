import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite, faLink, faCat  } from '@fortawesome/free-solid-svg-icons'


export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj__links">
            <a href={githubUrl} target="_blank" className="proj__link">
              <FontAwesomeIcon className="proj__icon" icon={faCat} />
            </a>
            <a href={demoUrl} target="_blank" className="proj__link">
              <FontAwesomeIcon className="proj__icon" icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}
