import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa';

export default function Contact() {
    return (
        <div>
            <section id="contact">
                <div className="contact-header">
                    <h1>Contact</h1>
                    <div className="contact-container">
                        <p>
                            I'm currently looking for new opportunities, feel free to contact me 
                            through LinkedIn or Gmail. Any feedback or questions are also more
                            than welcome, or if you would just like to say hi, my inbox is always open.
                        </p>
                    </div>
                </div>

                <div className="contact-links">
                <a href='https://www.linkedin.com/in/juan-fernando-tascon-677b4a244/' target="_blank" rel="noreferrer">
                    <div className="link">
                        <div className='link-icon'>
                            <FaLinkedinIn />
                        </div>
                        <div className="link-desc">
                            <h3>LinkedIn</h3>
                            <h4>Juan Fernando Tascon</h4>
                        </div>
                    </div>
                </a>
                <a href='https://github.com/FerT0' target="_blank" rel="noreferrer">
                    <div className="link">
                        <div className='link-icon'>
                            <FaGithub />
                        </div>
                        <div className="link-desc">
                            <h3>GitHub</h3>
                            <h4>FerT0</h4>
                        </div>
                    </div>
                </a>
                <a href='mailto:jtasconacevedo@gmail.com'>
                    <div className="link">
                        <div className='link-icon'>
                            <FaGoogle />
                        </div>
                        <div className="link-desc">
                            <h3>Gmail</h3>
                            <h4>jtasconacevedo@gmail.com</h4>
                        </div>
                    </div>
                </a>
                </div>
            </section>
        </div>
    )
}