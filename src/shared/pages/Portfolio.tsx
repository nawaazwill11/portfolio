import { useEffect, useRef, useState } from "react"
import { connect } from 'react-redux'
import { TAbilitiesSection, TAppState, TPageProps, TRank, TSectionAbilities, TSectionContact, TSectionExperience, TSectionIntroduction, TSectionProfile, TSectionProjects, TSectionAchievements, TAchievementsPoint } from "../../types/portfolio"
import { addWindowEvents, setSectionsOffsets } from '../reducers/portfolio'

const Navbar = () => {
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
                                        <a href={link.href} className="nav-link" data-toggle="collapse" data-target="#nav-list">{link.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

const Introduction = ({ data }: { data: TSectionIntroduction }) => {
    const background = data.background[Math.floor(Math.random() * data.background.length)]
    return (
        <section id="introduction" style={{ backgroundImage: `url('/static/img/background/${background}')` }}>
            <div className="container text-center">
                <h1 className="display-3 section-header">{data.header.large}</h1>
                {/* <p className="lead">{data.header.lead}</p> */}
            </div>
            <div className="overlay" />
        </section>
    )
}


const Profile = ({ data }: { data: TSectionProfile }) => {

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
                {/* <p className="lead">{data.header.lead}</p> */}
                <hr />
                <div className="content">
                    <div className="row profile-row">
                        <div className="col-lg-4">
                            <h3>About me</h3>
                            <p className="about-me">{data.about_me}</p>
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

const Experiences = ({ data }: { data: TSectionExperience }) => {
    // console.log(data)


    const xpFactory = (xps) => (
        xps.map((xp) => {
            return (
                <div key={Math.random()} className="row">
                    <div className="col-lg-4">
                        <h4>
                            <a href={xp.premise.href} target="_blank" rel="noreferer noopener">
                                {xp.premise.name}
                            </a>
                        </h4>
                        <p>{xp.duration}</p>

                        {
                            xp.premise.location
                                ?
                                (
                                    <p className="location">
                                        <img src="/static/img/svg/location.svg" alt="" />
                                        {xp.premise.location}
                                    </p>

                                )
                                : ''
                        }
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
                                        <b>Roles:</b> {xp.roles ? xp.roles.join(', ') : ''}
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
                {/* <p className="lead">{data.header.lead}</p> */}
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

const Abilities = ({ data }: { data: TSectionAbilities }) => {

    // console.log(data)

    const skillNodes = (skills: Array<TRank>) => {
        const half = Math.ceil(skills.length / 2)
        // sort skills in descending order
        skills.sort((a, b) => Number(b.rank) - Number(a.rank))

        return [skills.slice(0, half), skills.slice(half,)].map((part_skills) => (
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
        ))
    }

    const skillFactory = (sections: Array<TAbilitiesSection>) => (
        sections.map((section, i) => {
            let section_name = section.name
            return (
                <>
                    <div key={Math.random()} className="ability" >
                        <h3>{section_name}</h3>
                        <div className="row">
                            {skillNodes(section.nodes)}
                        </div>
                    </div>
                    {i < sections.length - 1 ? <hr /> : ''}
                </>
            )
        })
    )

    return (
        <section id="abilities">
            <div className="container">
                <h2 className="section-header">Abilities</h2>
                {/* <p className="lead">{data.header.lead}</p> */}
                <hr />
                <div className="content">
                    {skillFactory(data.sections)}
                </div>
            </div>
        </section>
    )
}

const Achievements = ({ data }: { data: TSectionAchievements }) => {
    return (
        <section id="achievements">
            <div className="container">
                <h2 className="section-header">Achievements</h2>
                {/* <p className="lead">{data.header.lead}</p> */}
                <hr />
                <div className="content">
                    <div className="row">
                        <ul className="achievement-list">
                            {
                                data.points.map((point: TAchievementsPoint) => (
                                    <li>
                                        <div className="point">
                                            <span><strong>{point.name}</strong></span>
                                        </div>
                                        <div className="date">
                                            <span>{point.date}</span>
                                            {/* <span><strong>Date: </strong></span> */}
                                        </div>
                                        <div className="attachments">
                                            {/* <span><strong>Attachments: </strong></span> */}
                                            {
                                                point.attachments.map((attachment: string, i: number) => (
                                                    <a key={Math.random()} className="attachment-link" href={attachment} target="_blank" rel="noreferer noopener">{i + 1}</a>
                                                ))
                                            }
                                        </div>
                                        <div className="border"></div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Projects = ({ data }: { data: TSectionProjects }) => {

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
                        <a className="hidden-link" href={project.href}>View</a>
                    </div>
                </div>
            </div>
        ))
    )

    return (
        <section id="projects" className="body-colored">
            <div className="container">
                <h2 className="section-header">Projects</h2>
                {/* <p className="lead">{data.header.lead}</p> */}
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

const Contact = ({ data }: { data: TSectionContact }) => {
    return (
        <footer id="contact">
            <div className="container">
                <h2 className="section-header">Contact</h2>
                {/* <p className="lead">{data.header.lead}</p> */}
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
                    <div className="hire-me">
                        <h3>Want to hire me?</h3>
                        <h4>Contact me on: <a href="tel:+919737177329">+91 97371 77329</a></h4>
                    </div>
                </div>
            </div>
            <div className="reference-attribute">
                Inspired by <a href="http://www.pascalvangemert.nl/" target="_blank" rel="noreferer noopener">Pascal Van Gemert</a>
            </div>
            <div className="portfolio-redirect">
                <a href="https://nawaaz.dev/portfolio">Check out my Interactive Portofolio for more</a>
            </div>
        </footer>
    )
}

const Page = ({
    state,
    setActiveNav }: TPageProps) => {

    console.log(state.data.achievements)
    return (
        <>
            <Navbar />
            <Introduction data={state.data.introduction} />
            <Profile data={state.data.profile} />
            <Experiences data={state.data.experiences} />
            <Abilities data={state.data.abilities} />
            <Achievements data={state.data.achievements} />
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