import { Col, Container, Nav, Tab, Row } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img1.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';




export const Projects = () => {


    const projects = [
       {
            title: "jkfkjsdg",
            description: "Design & Development",
            imgUrl: projImg1,
        },

        {
            title: "jkfkjsdg",
            description: "Design & Development",
            imgUrl: projImg2,

        },
        {
            title: "jkfkjsdg",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "jkfkjsdg",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "jkfkjsdg",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "jkfkjsdg",
            description: "Design & Development",
            imgUrl: projImg2,
        },
            
    ];

    return(

        <section className="project" id="Projects">
            <Container>
                <Row>
                    <Col size={12}>
                        {/* <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
                                <h2>Projects</h2>
                                <p>Experienced in all stages of the creative and development cycle, I excel in both programming and graphic design. Proficient in Python, React, Kotlin, and Adobe Creative Suite, I bring ideas to life through design and code. I thrive in fast-paced environments, consistently delivering innovative solutions.</p>
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
                                
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first"> 
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return(
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />  
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">hdjhgfdjk</Tab.Pane>
                                        <Tab.Pane eventKey="third">dfgdfg</Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            {/* </div>}
                        </TrackVisibility> */}
                    </Col>                  
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Image"></img>
        </section>
                     
    )

}