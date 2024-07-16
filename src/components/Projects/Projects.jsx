import './Projects.scss';
import Project from '../Project/Project';

export default function Projects() {
    return (
        <main id="projects"  className='projects'>
            <section  className='projects__container projects__container--top'>
                <h2  className='projects__title'>
                    Projects
                </h2>
            </section>
            <section  className='projects__container projects__container--bottom'>
                <Project />
            </section>
        </main>
    )
}