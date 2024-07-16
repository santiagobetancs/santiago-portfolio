import "./Header.scss";
import logo from "../../assets/images/sb.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import santiago from "../../assets/images/Santiago.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <main className="header__container">
          <section className="header__box header__box--logo">
            <img src={logo} alt="logo" className="header__logo" />
            <h1 className="header__title">SANTIAGO BETANCOURTH</h1>
          </section>
          <section className="header__box header__box--sb">
            <img className="header__sb" src={santiago} alt="" />
          </section>
          <section className="header__box header__box--nav">
            <a className="header__button" href="#projects">
              <h4 className="header__button">PROJECTS</h4>
            </a>
            <a className="header__button" href="#about">
              <h4 className="header__button">ABOUT</h4>
            </a>
            <section className="header__social">
              <Link
                className="header__link"
                to="https://github.com/santiagobetancs"
              >
                <FaGithub className="header__media" />
              </Link>
              <Link
                className="header__link"
                to="https://www.linkedin.com/in/santiago-betancourth/"
              >
                <FaLinkedin className="header__media" />
              </Link>
              {/* no route here */}
              <a className="header__link" href="mailto:santibegi@gmail.com">
                <IoIosMail className="header__media" />
              </a>
            </section>
          </section>
        </main>
      </header>
    </>
  );
}
