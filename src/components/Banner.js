import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/Jos Photo Web4.png";




export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["Full Stack Developer. ", "Graphic Designer. ", "Deep Learning Engineer. "];
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 1000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }



    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Wellcome to my Portfolio
                        </span> 
                        <h1> {'Hi, I am Yoseph Awoke.'}
                            {/* <span className="wrap">
                                {text}
                            </span> */}
                        </h1>
                        <h2> {'I am a '}
                            <span className="wrap">
                                {text}
                            </span>
                        </h2>
                        <p>Experienced in all stages of the creative and development cycle, I excel in both programming and graphic design. Proficient in Python, React, Kotlin, and Adobe Creative Suite, I bring ideas to life through design and code. I thrive in fast-paced environments, consistently delivering innovative solutions.</p>   
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>                
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}