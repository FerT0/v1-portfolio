import { TbWorld } from 'react-icons/tb';
import { MdOutlineGames } from 'react-icons/md';
import { RiDatabase2Line } from 'react-icons/ri';
import { BiBulb } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { SlScreenDesktop } from 'react-icons/sl';
import { SiPagespeedinsights } from 'react-icons/si';
import { GiGamepad } from 'react-icons/gi';


export default function About() {
    return (
        <div>
            <section  id="about">
                <div className="about-me-container">
                    <h1>About me</h1>
                    <p>Hey, my name is Juan Fernando. I'm a software developer and telecommunications engineering
                        student from Colombia. I got into the programming world at the young age of 14, my first
                        programming language was Java and since then I have not stopped learning and 
                        being passionate about everything related to technology. I used to develop 2D games with
                        Unity as a hobbie, even though I am more into the web development world. I am currently
                        learning back end technologies, as I would like to become a fullstack developer in a future.
                        <br />
                        <br />
                        I have participated and created front end projects on my own, one of them being RealPets, my
                        first front end project. Even though its design is not responsive, I'm really proud of it as it
                        has back-end functions along with it, such as a functional login. Recently I have tried re-creating
                        this project as an e-commerce website made in React, which is now available to see in my Github profile.
                    </p>
                    <h2>Interests</h2>
                </div>

                <div className="interests-container">
                    <div className="interests">
                        <div className='interests-icon'>
                            <TbWorld />
                        </div>
                        <div className='interests-text'>Web development</div>    
                    </div>
                    <div className="interests">
                        <div className='interests-icon'>
                            <MdOutlineGames />
                        </div>
                        <div className='interests-text'>Game development</div> 
                    </div>
                    <div className="interests">
                        <div className='interests-icon'>
                            <RiDatabase2Line />
                        </div>
                        <div className='interests-text'>Database</div>
                    </div>
                    <div className="interests">
                        <div className='interests-icon'>
                            <BiBulb />
                        </div>
                        <div className='interests-text'>Problem solving</div>
                    </div>
                </div>
                <div className="interests-container">    
                <div className="interests">
                        <div className='interests-icon'>
                            <BsCodeSlash />
                        </div>
                        <div className='interests-text'>Algorithms</div>
                    </div>
                    <div className="interests">
                        <div className='interests-icon'>
                            <SlScreenDesktop />
                        </div>
                        <div className='interests-text'>Front end</div>
                    </div>
                    <div className="interests">
                        <div className='interests-icon'>
                            <SiPagespeedinsights />
                        </div>
                        <div className='interests-text'>Back end</div>
                    </div>
                    <div className="interests">
                        <div className='interests-icon'>
                            <GiGamepad />
                        </div>
                        <div className='interests-text'>Gaming</div>
                    </div>
                </div>
            </section>
        </div>
    )
}