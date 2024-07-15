import './Projects.scss';
import Project from '../Project/Project';

export default function Projects() {
    return (
        <main className='projects'>
            <section className='projects__container projects__container--top'>
                <h1 className='projects__title'>
                    Projects
                </h1>
            </section>
            <section className='projects__container projects__container--bottom'>
                <Project />
            </section>
        </main>
    )
}