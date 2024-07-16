import "./Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <main className="footer__container">
        <h1 className="footer__header">SANTIAGO BETANCOURTH</h1>
        <section className="footer__social">
          <Link
            className="footer__link"
            to="https://github.com/santiagobetancs"
          >
            <FaGithub className="footer__media" />
          </Link>
          <Link
            className="footer__link"
            to="https://www.linkedin.com/in/santiago-betancourth/"
          >
            <FaLinkedin className="footer__media" />
          </Link>
          {/* no route here */}
          <a href="mailto:santibegi@gmail.com" className="footer__link">
            <IoIosMail className="footer__media" />
          </a>
        </section>
      </main>
    </footer>
  );
}
