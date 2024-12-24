import { useState, useEffect } from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import logox from '../assets/img/Jos Logo cut2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/git-icon.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../App.css';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);


    }, []);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
   
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logox} alt="logo" />     
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#Skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#Projects" className = {activeLink === 'projects'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/yosephawoke/"><img src={navIcon1} alt=""/></a>
                            <a href="https://github.com/YosephAwoke"><img src={navIcon2} alt=""/></a>
                            <a href="https://www.instagram.com/yoseph.awoke/"><img src={navIcon3} alt=""/></a>                            
                        </div>
                        {/* <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
                        

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );     
   

};