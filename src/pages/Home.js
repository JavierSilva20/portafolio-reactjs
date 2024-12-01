import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section className="home">
            <div>
                <h1>Soy Javier Silva.</h1>
                <p>Soy un <strong>estudiante activo y futuro backend developer</strong> con bases sólidas en Python y JavaScript.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/profile.php?id=100015187691123&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/javier-silva-desarrollador/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/JavierSilva20" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </section>
    ); 
}

export default Home;
