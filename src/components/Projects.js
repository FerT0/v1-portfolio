import trivia from "./images/trivia.png"
import portfolioimg from "./images/portfolio.png"
import shoppey from "./images/shoppey.png"
import { FaReact, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';


export default function Projects() {
    return (
        <div>
            <section id="projects">
                <div className="projects-header">
                    <h1>Projects</h1>
                    <div className="projects-container">
                        <div className="project">
                            <div className="project-img">
                                <img src={trivia} alt="Trivia Time"></img>
                            </div>
                            <h2>Trivia Time!</h2>
                            <p>Trivia game with three levels of difficulty, made with React, HTML and 
                                CSS. It generates random questions each time, the player has a timer and limited
                                lives. This is my first React project ever made. No templates were used.
                            </p>
                            <div className="technologies">
                                <a href='https://reactjs.org' target="_blank" rel="noreferrer"><FaReact /></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer"><IoLogoJavascript /></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><FaHtml5 /></a>
                            </div>
                            <div className="live-code">
                            <a href="https://github.com/FerT0/trivia-game" target="_blank" rel="noreferrer">
                                <button>View code</button>
                            </a>
                                <button>Live version</button>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-img">
                                <img src={shoppey} alt="Shoppey"></img>
                            </div>
                            <h2>Shoppey</h2>
                            <p>E-commerce website made with React, HTML and CSS. DummyJSON's public API was used
                                to get the products and its information. No templates were used, and I'm currently
                                working on improving its design.
                            </p>
                            <div className="technologies">
                                <a href='https://reactjs.org' target="_blank" rel="noreferrer"><FaReact /></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer"><IoLogoJavascript /></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><FaHtml5 /></a>
                            </div>
                            <div className="live-code">
                                <a href="https://github.com/FerT0/shoppey" target="_blank" rel="noreferrer">
                                    <button>View code</button>
                                </a>
                                <button>Live version</button>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-img">
                                <img src={portfolioimg} alt="My portfolio"></img>
                            </div>
                            <h2>My portfolio</h2>
                            <p>This is my portfolio, which you're currently seeing. It was made from scratch
                                by myself with React, HTML and CSS.
                            </p>
                            <div className="technologies">
                                <a href='https://reactjs.org' target="_blank" rel="noreferrer"><FaReact /></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer"><IoLogoJavascript /></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><FaHtml5 /></a>
                            </div>
                            <div className="live-code">
                                <a href="https://github.com/FerT0/portfolio" target="_blank" rel="noreferrer">
                                    <button>View code</button>
                                </a>
                                <button>Live version</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}