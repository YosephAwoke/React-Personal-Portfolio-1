import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';

function App() {

  const contactRef = useRef(null);
    const [contactLoaded, setContactLoaded] = useState(false); // New state variable

    useEffect(() => {
        // Check if contactRef is attached after every render
        if (contactRef.current) {
          setContactLoaded(true);
        }
    });

    const scrollToContact = () => {
        if (contactLoaded) { // Only scroll if the ref is attached
          contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className="App">
      <NavBar />
      <Banner  scrollToContact={scrollToContact} />
      <Skills />
      <Projects />
      <Contact ref={contactRef}/>
      <Footer />
    </div>
  );
}

export default App;
