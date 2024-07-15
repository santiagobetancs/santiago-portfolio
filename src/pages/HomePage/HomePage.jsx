import './HomePage.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import About from '../../components/About/About';

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Projects />
            <About />
            <Footer />
        </>
    )
}