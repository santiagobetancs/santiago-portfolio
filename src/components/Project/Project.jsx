import './Project.scss';
import storytime from '../../assets/images/StoryTime.jpg';
import { CiLink } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { PiFileJsxBold } from "react-icons/pi";
import { FaSass } from "react-icons/fa";


export default function Project() {
    return (
        <main className='project'>
            <section className='project__container'>
                <img className='project__thumbnail' src={storytime} alt="thumbnail" />
                <div className='project__description'>
                    <h4 className='project__title'>
                        StoryTime
                    </h4>
                    <Link className='project__follow' to='https://santiago-betancourth-capstone.vercel.app/'>
                        <h4 className='project__follow'>
                            Follow Link
                            <CiLink className='project__link'/>
                        </h4>
                    </Link>
                </div>
                <p className='project__text'>
                    Tech Stack:
                </p>
                <section className='project__tech'>
                    <div className='project__program'>
                        <FaReact className='project__icon'/>
                        <p className='project__name'>
                            React.js
                        </p>
                    </div>
                    <div className='project__program'>
                        <FaNodeJs className='project__icon'/>
                        <p className='project__name'>
                            Node.js
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
                </section>
            </section>
        </main>
    )
}