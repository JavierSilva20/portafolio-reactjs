import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const proyectos = [
        {
            nombre: 'Pokémon Info',
            descripcion: 'Aplicación para encontrar datos de todos los Pokémon.',
            link: 'https://github.com/JavierSilva20/pokeapp1.git',
        },
        {
            nombre: 'Número Secreto',
            descripcion: 'Juego de adivinanza de un número entre uno y diez.',
            link: 'https://github.com/JavierSilva20/juego-secreto.git',
        },
        {
            nombre: 'Formación Virtual',
            descripcion: 'Sitio web para promocionar formación en tecnología.',
            link: 'https://github.com/JavierSilva20/practica03-git.git',
        },
    ];

    return (
        <section className="projects">
            <h2>Mis Proyectos</h2>
            <div className="projects-grid">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="project-card">
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                        <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;