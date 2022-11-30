import React, { useState } from "react"
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useNavigate } from "react-router"

export default function Info() {
    const [page, setPage] = useState();
    const PAGE_ABOUT = 'about';
    const PAGE_PROJECTS = 'projects';
    const PAGE_SKILLS = 'skills';
    const navigate = useNavigate();

    

    const goToHome = () => {
        navigate("/");
    }

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

    const navigateTo = (pageToGo) => {
        setPage(pageToGo);
    }

    return (
        <div>
            {page === PAGE_ABOUT && renderAbout()}
            {page === PAGE_PROJECTS && renderProjects()}
            {page === PAGE_SKILLS && renderSkills()}
        </div>
    )
}