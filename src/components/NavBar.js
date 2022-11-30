import { bubble as Menu } from 'react-burger-menu'

export default function NavBar(props) {
    const goToHome = () => {
        props.nextPage('home');
    }

    const goToAbout = () => {
        props.nextPage('about');
    }
    
    return (
        <div>
            <div className="navbar">
                <h2 id='name'>Juan Fernando Tascon</h2>
                <li className='navbar-element' onClick={goToHome}>Home</li>
                <li className={props.aboutStatus ? 'navbar-element active' : 'navbar-element'} onClick={goToAbout}>About me</li>
                <li className={props.projectStatus ? 'navbar-element active' : 'navbar-element'} onClick={() => props.nextPage('projects')}>Projects</li>
                <li className={props.skillStatus ? 'navbar-element active' : 'navbar-element'} onClick={() => props.nextPage('skills')}>Skills</li>
                <li className={props.contactStatus ? 'navbar-element active' : 'navbar-element'} onClick={() => props.nextPage('contact')}>Contact</li>
            </div>

            
            <div className='navbar-burguer'>
                <Menu>
                    <li className='navbar-element' onClick={goToHome}>Home</li>
                    <li className={props.aboutStatus ? 'navbar-element active' : 'navbar-element'} onClick={goToAbout}>About me</li>
                    <li className={props.projectStatus ? 'navbar-element active' : 'navbar-element'} onClick={() => props.nextPage('projects')}>Projects</li>
                    <li className={props.skillStatus ? 'navbar-element active' : 'navbar-element'} onClick={() => props.nextPage('skills')}>Skills</li>
                    <li className={props.contactStatus ? 'navbar-element active' : 'navbar-element'} onClick={() => props.nextPage('contact')}>Contact</li>
                </Menu>
            </div>
        </div>
    )
}







