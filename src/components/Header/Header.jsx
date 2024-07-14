import './Header.scss';
import logo from '../../assets/images/sb.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className='header'>
                <section className='header__box header__box--logo'>
                    <img src={logo} alt="logo" className='header__logo'/>
                </section>
                <section className='header__box header__box--nav'>
                    <h4 className='header__button'>
                        PROJECTS
                    </h4>
                    <h4 className='header__button'>
                        ABOUT
                    </h4>
                    <section className='header__social'>
                        <Link className='header__link' to='https://github.com/santiagobetancs'>
                            <FaGithub className='header__media'/>
                        </Link>
                        <Link className='header__link' to='https://www.linkedin.com/in/santiago-betancourth/'>
                            <FaLinkedin className='header__media'/>
                        </Link>
                        {/* no route here */}
                        <Link className='header__link'>
                            <IoIosMail className='header__media'/>
                        </Link>
                    </section>
                </section>
            </header>
        </>
    )
}