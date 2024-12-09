import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logox from '../assets/img/Jos Logo cut2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {

    return(
        <footer className="footer">
            <Container>

                <Row className="align-items-center">
                    <MailchimpForm/>
                    <Col sm = {6}>
                        <img src={logox} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt=""/></a>
                        <a href="#"><img src={navIcon2} alt=""/></a>
                        <a href="#"><img src={navIcon3} alt=""/></a>
                    </div>
                    <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}