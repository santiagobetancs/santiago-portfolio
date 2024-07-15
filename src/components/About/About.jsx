import './About.scss';
import santiago from '../../assets/images/santiago-image.jpg';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function About() {
    return (
        <main className='about'>
            <section className='about__container'>
                <div className='about__box about__text--image'>
                    <h2 className='about__title'>
                        About Me
                    </h2>
                    <img className='about__image' src={santiago} alt="img" />
                </div>
                <div className='about__box about__box--text'>
                    <p className='about__text'>
                        I am a software engineer with a passion for learning and growing. I just recently transitioned into web devlopment and have fallen in love with the field. You can find me either taking a course to learn a new skill or spending time on my hobbies!
        <br /> <br />
                        I love listening to music and collecting sneakers! You might find me going on a jog too, even though I absolutely detest running!
                        <br /><br />
                        If you'd like to connect then feel free to add me on LinkedIn or shoot me an email. I'll leave the buttons below!
                    </p>
                    <div className='about__social'>
                        <Link className='about__link' to='https://www.linkedin.com/in/santiago-betancourth/'>
                            <FaLinkedin className='about__media'/>
                        </Link>
                        {/* ADD EMAIL */}
                        <Link className='about__link'>
                            <IoIosMail className='about__media'/>
                        </Link>
                        <Link className='about__link' to='https://github.com/santiagobetancs'>
                            <FaGithub className='about__media'/>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}