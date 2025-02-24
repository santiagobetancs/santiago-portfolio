import './Project.scss';
import storytime from '../../assets/images/StoryTime.jpg';
import { CiLink } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { PiFileJsxBold } from "react-icons/pi";
import { FaSass } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Project() {
    return (
        <main className='project'>
            <section className='project__container'>
                <img className='project__thumbnail' src={storytime} alt="thumbnail" />
                <section className='project__box'>
                    <div className='project__description'>
                        <h4 className='project__title'>
                            StoryTime
                        </h4>
                        <Link className='project__follow' to='https://santiago-betancourth-capstone.vercel.app/'>
                            <h4 className='project__follow'>
                                Follow Link
                                <CiLink className='project__link'/>
                            </h4>
                            <Link className='project__link' to='https://github.com/santiagobetancs/santiago-betancourth-capstone'>
                                <FaGithub  />
                            </Link>
                        </Link>
                    </div>
                    {/* <p className='project__text'>
                        Tech Stack:
                    </p> */}
                    <p className='project__text'>
                        This was my first individual project. It solves a problem that I, as a reader faced: finding the right book. Create an account to get great read recommendations from world-renowned critics. Play around with profile and liked books!
                    </p>
                    <section className='project__tech'>
                        <div className='project__program'>
                            <FaReact className='project__icon'/>
                            <p className='project__name'>
                                React
                            </p>
                        </div>
                        <div className='project__program'>
                            <FaNodeJs className='project__icon'/>
                            <p className='project__name'>
                                Node
                            </p>
                        </div>
                        <div className='project__program'>
                            <PiFileJsxBold className='project__icon'/>
                            <p className='project__name'>
                                JSX
                            </p>
                        </div>  
                        <div className='project__program'>
                            <FaSass className='project__icon'/>
                            <p className='project__name'>
                                Sass
                            </p>
                        </div>     
                        <div className='project__program'>
                            <SiExpress className='project__icon'/>
                            <p className='project__name'>
                                Express
                            </p>
                        </div>    
                        <div className='project__program'>
                            <FaNpm className='project__icon'/>
                            <p className='project__name'>
                                NPM
                            </p>
                        </div>    
                        <div className='project__program'>
                            <FaGitAlt className='project__icon'/>
                            <p className='project__name'>
                                Git
                            </p>
                        </div>                                                             
                    </section>
                </section>
            </section>
        </main>
    )
}