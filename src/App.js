import React, { useState } from "react"
import Home from './components/Home';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

export default function App() {
    const [page, setPage] = useState('home');
    const [isAboutActive, setIsAboutActive] = useState(false);
    const [isProjectsActive, setIsProjectsActive] = useState(false);
    const [isSkillsActive, setIsSkillsActive] = useState(false);
    const [isContactActive, setIsContactActive] = useState(false);

    const getPageToGo = (pageToGo) => {
        
        switch (pageToGo) {
            case 'about':
                setIsAboutActive(true);
                setIsProjectsActive(false);
                setIsSkillsActive(false);
                setIsContactActive(false);
                break;
            case 'projects':
                setIsProjectsActive(true);
                setIsSkillsActive(false);
                setIsAboutActive(false);
                setIsContactActive(false);
                break;
            case 'skills':
                setIsSkillsActive(true);
                setIsAboutActive(false);
                setIsProjectsActive(false);
                setIsContactActive(false);
                break;

            case 'contact':
                setIsContactActive(true);
                setIsAboutActive(false);
                setIsProjectsActive(false);
                setIsSkillsActive(false);
                break;

            default: break;
        }

        setPage(pageToGo);
    }

    const renderHome = () => (
        <>
            <Home nextPage={getPageToGo}/>
        </>
    );

    const renderAbout = () => (
        <>
            <About />
        </>
    );

    const renderProjects = () => (
        <>
            <Projects />
        </>
    );

    const renderSkills = () => (
        <>
            <Skills />
        </>
    );

    const renderContact = () => (
        <>
            <Contact />
        </>
    );

    return (
        <div>
            {page === 'home' && renderHome()}
            {page !== 'home' && <NavBar nextPage={getPageToGo} aboutStatus={isAboutActive} projectStatus={isProjectsActive} skillStatus={isSkillsActive} contactStatus={isContactActive}/>}
            {page === 'about' && renderAbout()}
            {page === 'projects' && renderProjects()}
            {page === 'skills' && renderSkills()}
            {page === 'contact' && renderContact()}
        </div>
    )
}
