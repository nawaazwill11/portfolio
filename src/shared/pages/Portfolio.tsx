import { useEffect, useRef, useState } from "react"
import { connect } from 'react-redux'
import { TAppState, TPageProps } from "../../types/portfolio"
import { addWindowEvents, setSectionsOffsets } from '../reducers/portfolio'

const Navbar = ({ setActiveNav }) => {
    const links = [
        {
            name: 'Profile',
            href: '#profile'
        },
        {
            name: 'Experience',
            href: '#experiences'
        },
        {
            name: 'Abilities',
            href: '#abilities'
        },
        {
            name: 'Projects',
            href: '#projects'
        },
        {
            name: 'Contact',
            href: '#contact'
        }
    ]

    const links_ref = []

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-list">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="nav-list">
                    <ul className="navbar-nav">
                        {
                            links.map((link, i) => {
                                links_ref[i] = useRef()
                                return (
                                    <li key={Math.random()} ref={links_ref[i]} className={`nav-item ${i === 0 ? 'active' : ''}`}>
                                        <a href={link.href} className="nav-link">{link.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNavDropdown">
        //             <ul class="navbar-nav">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Features</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Pricing</a>
        //                 </li>
        //                 <li class="nav-item dropdown">
        //                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown link
        //   </a>
        //                     <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                         <li><a class="dropdown-item" href="#">Action</a></li>
        //                         <li><a class="dropdown-item" href="#">Another action</a></li>
        //                         <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

const Introduction = ({ data }) => {
    const background = () => {
        return data.background[Math.floor(Math.random() * 3)]
    }
    return (
        <section id="introduction" style={{ backgroundImage: `url('/static/img/${background()}')` }}>
            <div className="container text-center">
                <h1 className="display-3 section-header">{data.header.large}</h1>
                <p className="lead">{data.header.lead}</p>
            </div>
            <div className="overlay" />
        </section>
    )
}


const Profile = ({ data }) => {

    const getAge = () => {
        const today = new Date()
        let age = today.getFullYear() - new Date(data.details.age).getFullYear()
        let has_birthday_passed = false

        if (today.getMonth() + 1 > 11 || (today.getMonth() + 1 === 11 && today.getDate() >= 24)) {
            has_birthday_passed = true
        }

        return !has_birthday_passed ? age - 1 : age
    }

    const details = [
        ['Name', data.details.name],
        ['Age', getAge()],
        ['Location', data.details.location],
        ['Hobbies', data.details.hobbies.join(', ')],
    ]

    return (
        <section id="profile">
            <div className="container">
                <h2 className="section-header">Profile</h2>
                <p className="lead">{data.header.lead}</p>
                <hr />
                <div className="content">
                    <div className="row profile-row">
                        <div className="col-lg-4">
                            <h3>About me</h3>
                            <p>{data.about_me}</p>
                        </div>
                        <div className="col-lg-4 text-center py-4">
                            <img className="author-img" src={`/static/img/${data.img}`} alt={data.details.name} />
                        </div>
                        <div className="col-lg-4">
                            <h3>Details</h3>
                            {
                                details.map((info) => (
                                    <p key={Math.random()}>
                                        <span><strong className="info-head">{info[0]}</strong></span>
                                        <br />
                                        <span>{info[1]}</span>
                                    </p>
                                ))
                            }
                            {/* <div className="social">
                                <a className="btn btn-primary" href="https://www.linkedin.com/in/nawaaz-kortiwala-a01099113/" target="_blank" rel="norefere noopener">
                                    <img className="social-button" src="/static/img/svg/linkedin.svg" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Experiences = ({ data }) => {
    // console.log(data)


    const xpFactory = (xps) => (
        xps.map((xp) => {
            return (
                <div key={Math.random()} className="row">
                    <div className="col-lg-4">
                        <h4>
                            <a href={xp.premise.href}>
                                {xp.premise.name}
                            </a>
                        </h4>
                        {/* <span className="d-block">{xp.premise.sub}</span> */}
                        <p>{xp.duration}</p>
                    </div>
                    <div className="col-lg-8">
                        <p>
                            <strong>{xp.title}</strong>
                        </p>
                        <p>{xp.description}</p>
                        {
                            xp.roles ?
                                (
                                    <p>
                                        <b>Roles:</b> {xp.roles.join(', ')}
                                    </p>
                                ) : ''
                        }
                    </div>
                </div>
            )
        })
    )

    return (
        <section id="experiences" className="body-colored">
            <div className="container">
                <h2 className="section-header">Experiences</h2>
                <p className="lead">{data.header.lead}</p>
                <hr />
                <div className="content">
                    <h3>Educations</h3>
                    <div className="experiences">
                        {
                            xpFactory(data.educations)
                        }
                    </div>
                    <hr />
                    <h3>Careers</h3>
                    <div className="experiences">
                        {
                            xpFactory(data.careers)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

const Abilities = ({ data }) => {

    // console.log(data)

    const skillFactory = (skills, half) => (
        [skills.slice(0, half), skills.slice(half,)].map((part_skills) => {
            return (
                <div key={Math.random()} className="col-lg-6">
                    <ul className="bullet-less">
                        {part_skills.map((skill) => (
                            <li key={Math.random()}>
                                <span className="skill">{skill.name}</span>
                                <span className="rank">
                                    {new Array(5).fill(skill.rank).map((v, i) => {
                                        return <img key={Math.random()} src={`/static/img/svg/star${i < v ? '-fill' : ''}.svg`} alt="" />
                                    })}
                                </span>
                            </li>))}
                    </ul>
                </div>
            )
        })
    )


    return (
        <section id="abilities">
            <div className="container">
                <h2 className="section-header">Abilities</h2>
                <p className="lead">{data.header.lead}</p>
                <hr />
                <div className="content">
                    <h3>Software Skills</h3>
                    <div className="row">
                        {skillFactory(data.software, Math.ceil(data.software.length / 2))}
                    </div>
                    <hr />
                    <h3>Development Tools</h3>
                    <div className="row">
                        {skillFactory(data.tools, Math.ceil(data.tools.length / 2))}
                    </div>
                    <hr />
                    <h3>Verbal Language</h3>
                    <div className="row">
                        {skillFactory(data.languages, Math.ceil(data.languages.length / 2))}
                    </div>

                </div>
            </div>
        </section>
    )
}

const Projects = ({ data }) => {

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

    const projectFactory = (projects) => (
        projects.map((project) => (
            <div key={Math.random()} className="col-lg-6">
                <div className="project">
                    <img className="project-image" src={`/static/img/project/${project.img}`} alt={project.name} />
                    <div className="project-overview">
                        <h4>{project.name}</h4>
                        <p className="info">
                            <span>{project.description}</span>
                            <span>{project.tags.join(', ')}</span>
                            <span className="border-0">{project.duration} {project.ongoing ? '| On-going' : ''}</span>
                        </p>
                        <a className="btn btn-primary" href={project.href} target="_blank" rel="noreferer noopener">
                            <img src="/static/img/svg/open.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        ))
    )

    return (
        <section id="projects" className="body-colored">
            <div className="container">
                <h2 className="section-header">Projects</h2>
                <p className="lead">{data.header.lead}</p>
                <hr />
                <div className="content">
                    <div className="row">
                        {projectFactory(data.projects)}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Contact = ({ data }) => {
    return (
        <footer id="contact">
            <div className="container">
                <h2 className="section-header">Contact</h2>
                <p className="lead">{data.header.lead}</p>
                <hr />
                <div className="content">
                    <div className="row handler-row">
                        <div className="col-4 text-center">
                            <a href="https://www.linkedin.com/in/nawaaz-kortiwala-a01099113/" target="_blank" rel="noreferer noopener">
                                <img src="/static/img/svg/linkedin.svg" alt="" />
                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="https://www.github.com/nawaazwill11" target="_blank" rel="noreferer noopener">
                                <img src="/static/img/svg/github.svg" alt="" />

                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="mailto:nawaazkortiwala@gmail.com">
                                <img src="/static/img/svg/mail.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <h3>Want to hire me?</h3>
                        <h4>Contact me on: <a href="tel:+919737177329">+91 97371 77329</a></h4>
                    </div>
                </div>
            </div>
            <div className="reference-attribute">
                Inspired by <a href="http://www.pascalvangemert.nl/" target="_blank" rel="noreferer noopener">Pascal Van Gemert</a>
            </div>
        </footer>
    )
}

const Page = ({
    state,
    setActiveNav }: TPageProps) => {
        
    return (
        <>
            <Navbar setActiveNav={setActiveNav} />
            <Introduction data={state.data.introduction} />
            <Profile data={state.data.profile} />
            <Experiences data={state.data.experiences} />
            <Abilities data={state.data.abilities} />
            <Projects data={state.data.projects} />
            <Contact data={state.data.contact} />
        </>
    )
}

const mapStateToProps = (state: TAppState) => {
    return {
        state: state,
    }
}


export default connect(mapStateToProps)(Page)