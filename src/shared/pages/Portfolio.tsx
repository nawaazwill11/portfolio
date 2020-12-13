import { useEffect } from "react"

const Introduction = () => {
    return (
        <section id="introduction" style={{ backgroundImage: "url('/img/super-duke.jpg')" }}>
            <div className="container">
                <h1 className="display-3 section-header">Nawaaz Kortiwala</h1>
                <p className="lead">Interactive Resume</p>
            </div>
            <div className="overlay" />
        </section>
    )
}


const Profile = () => {

    const getAge = () => {
        const today = new Date()
        let age = today.getFullYear() - new Date("1993-11-24").getFullYear()
        let has_birthday_passed = false

        if (today.getMonth() + 1 > 11 || (today.getMonth() + 1 === 11 && today.getDate() >= 24)) {
            has_birthday_passed = true
        }

        return !has_birthday_passed ? age - 1 : age
    }

    const details = [
        ['Name', 'Nawaaz Kortiwala'],
        ['Age', getAge()],
        ['Location', 'Daman, Daman & Diu (U.T.), India']
    ]


    return (
        <section id="profile">
            <div className="container">
                <h2 className="section-header">Profile</h2>
                <p className="lead">I'm a proficient JavaScript developer</p>
                <hr />
                <div className="content">
                    <div className="row profile-row">
                        <div className="col-lg-4">
                            <h3>About me</h3>
                            <p>
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                                Some text I will write to describe myself.
                            </p>
                        </div>
                        <div className="col-lg-4 text-center py-4">
                            <img className="author-img" src="/img/me.jpg" alt="Nawaaz" />
                        </div>
                        <div className="col-lg-4">
                            <h3>Details</h3>
                            {
                                details.map((info) => (
                                    <p>
                                        <span><strong className="info-head">{info[0]}</strong></span>
                                        <br />
                                        <span>{info[1]}</span>
                                    </p>
                                ))
                            }
                            <div className="social">
                                <a className="btn btn-primary" href="https://www.linkedin.com/in/nawaaz-kortiwala-a01099113/" target="_blank" rel="norefere noopener">
                                    <img className="social-button" src="/img/svg/linkedin.svg" />
                                </a>
                                <a className="btn btn-primary" href="https://github.com/nawaazwill11/" target="_blank" rel="norefere noopener">
                                    <img className="social-button" src="/img/svg/github.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Experience = () => {
    return (
        <section id="experiences" className="body-colored">
            <div className="container">
                <h2 className="section-header">Experiences</h2>
                <p className="lead">A quote perhaps</p>
                <hr />
                <div className="content">
                    <h3>Educations</h3>
                    <div className="experiences">
                        {
                            new Array(4).fill('a').map(() => (<div className="row">
                                <div className="col-md-4">
                                    <h4>Sinhgad Institutes</h4>
                                    <p>May 2015 - April 2015</p>
                                </div>
                                <div className="col-md-8">
                                    <p>
                                        <strong>Degree - Master of Computer Application</strong>
                                    </p>
                                    <p>
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                </p>
                                </div>
                            </div>))}
                    </div>
                    <hr />
                    <h3>Careers</h3>
                    <div className="experiences">
                        {
                            new Array(4).fill('a').map(() => (<div className="row">
                                <div className="col-md-4">
                                    <h4>Sinhgad Institutes</h4>
                                    <p>May 2015 - April 2015</p>
                                </div>
                                <div className="col-md-8">
                                    <p>
                                        <strong>Degree - Master of Computer Application</strong>
                                    </p>
                                    <p>
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                        Some text about the education I received here.
                                </p>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Abilities = () => {
    return (
        <section id="abilities">
            <div className="container">
                <h2 className="section-header">Abilities</h2>
                <p className="lead">Some text that makes abstract sense.</p>
                <hr />
                <div className="content">
                    <h3>Software Skills</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="bullet-less">
                                {new Array(10).fill('').map(() => (
                                    <li>
                                        <span className="skill">Language</span>
                                        <span className="rank">
                                            {new Array(5).fill(4).map((v, i) => {
                                                return <img src={`/img/svg/star${i < v ? '-fill' : ''}.svg`} alt="" />
                                            })}
                                        </span>
                                    </li>))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="bullet-less">
                                {new Array(10).fill('').map(() => (
                                    <li>
                                        <span className="skill">Language</span>
                                        <span className="rank">
                                            {new Array(5).fill(4).map((v, i) => {
                                                return <img src={`/img/svg/star${i < v ? '-fill' : ''}.svg`} alt="" />
                                            })}
                                        </span>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h3>Language Known</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="bullet-less">
                                {new Array(2).fill('').map(() => (
                                    <li>
                                        <span className="skill">Language</span>
                                        <span className="rank">
                                            {new Array(5).fill(4).map((v, i) => {
                                                return <img src={`/img/svg/star${i < v ? '-fill' : ''}.svg`} alt="" />
                                            })}
                                        </span>
                                    </li>))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="bullet-less">
                                {new Array(2).fill('').map(() => (
                                    <li>
                                        <span className="skill">Language</span>
                                        <span className="rank">
                                            {new Array(5).fill(4).map((v, i) => {
                                                return <img src={`/img/svg/star${i < v ? '-fill' : ''}.svg`} alt="" />
                                            })}
                                        </span>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h3>Development Tools</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="bullet-less">
                                {new Array(10).fill('').map(() => (
                                    <li>
                                        <span className="skill">Language</span>
                                        <span className="rank">
                                            {new Array(5).fill(4).map((v, i) => {
                                                return <img src={`/img/svg/star${i < v ? '-fill' : ''}.svg`} alt="" />
                                            })}
                                        </span>
                                    </li>))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="bullet-less">
                                {new Array(10).fill('').map(() => (
                                    <li>
                                        <span className="skill">Language</span>
                                        <span className="rank">
                                            {new Array(5).fill(4).map((v, i) => {
                                                return <img src={`/img/svg/star${i < v ? '-fill' : ''}.svg`} alt="" />
                                            })}
                                        </span>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

    const handleMouseIn = (e) => {
        const element = e.currentTarget
        element.querySelector('.project-overview').style.top = 0
    }

    const handleMouseOut = (e) => {
        const element = e.currentTarget
        element.querySelector('.project-overview').style.top = '500px'
    }

    useEffect(() => {
        const projects = document.querySelectorAll('#projects .project')
        projects.forEach((project) => {
            project.addEventListener('mouseover', handleMouseIn)
            project.addEventListener('mouseout', handleMouseOut)
        })

        return () => {
            projects.forEach((project) => {
                project.removeEventListener('mouseover', handleMouseIn)
                project.removeEventListener('mouseout', handleMouseOut)
            })
        }
    })

    return (
        <section id="projects" className="body-colored">
            <div className="container">
                <h2 className="section-header">Projects</h2>
                <p className="lead">A fancy, catchy tag-line.</p>
                <hr />
                <div className="content">
                    <div className="row">
                        {new Array(4).fill('').map(() =>(<div className="col-md-6">
                            <div className="project">
                                <img className="project-image" src="/img/George-Carlin-2.jpg" alt="" />
                                <div className="project-overview">
                                    <h3>Project Name</h3>
                                    <p>
                                        Description of the project
                                        <br />
                                        HTML, CSS, JS, Node.js, ReactJS
                                        <br />
                                        3 months | On-going
                                    </p>
                                    <a className="btn btn-primary" href="#" target="_blank" rel="noreferer noopener">
                                        <img src="/img/svg/open.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Page = ({ a }) => {
    return (
        <>
            <Introduction />
            <Profile />
            <Experience />
            <Abilities />
            <Projects />
        </>
    )
}

export default Page