import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa';

export default function Home(props) {
    return (
        <header id="header">
                <div className="header-title">
                    <h1>Juan Fernando Tascon</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="header-bar">
                    <li className="bar-element">Home</li>
                    <li className="bar-element" onClick={() => props.nextPage('about')}>About me</li>
                    <li className="bar-element" onClick={() => props.nextPage('projects')}>Projects</li>
                    <li className="bar-element" onClick={() => props.nextPage('skills')}>Skills</li>
                    <li className="bar-element" onClick={() => props.nextPage('contact')}>Contact</li>
                </div>
                <div className="social">
                    <a href='https://www.linkedin.com/in/juan-fernando-tascon-677b4a244/' target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    <a href='https://github.com/FerT0' target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href='mailto:jtasconacevedo@gmail.com'><FaGoogle /></a>
                </div>
            </header>
    )
}