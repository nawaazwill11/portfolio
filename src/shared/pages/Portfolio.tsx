import { useEffect, useRef, useState } from "react"
import { connect } from 'react-redux'
import { TAbilitiesSection, TAppState, TPageProps, TRank, TSectionAbilities, TSectionContact, TSectionExperience, TSectionIntroduction, TSectionProfile, TSectionProjects, TSectionAchievements, TAchievementsPoint, TExperience } from "../../types/portfolio"
import { addWindowEvents, setSectionsOffsets } from '../reducers/portfolio'

function ifElem(data, elem, not = '') {
    return data ? elem : not
}


function capitalizeAll(string) {
    return string
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1,))
        .join(' ')
}

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
            name: 'Achievements',
            href: '#achievements'
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

    // const getAge = () => {
    //     const today = new Date()
    //     let age = today.getFullYear() - new Date(data.details.age).getFullYear()
    //     let has_birthday_passed = false

    //     if (today.getMonth() + 1 > 11 || (today.getMonth() + 1 === 11 && today.getDate() >= 24)) {
    //         has_birthday_passed = true
    //     }

    //     return !has_birthday_passed ? age - 1 : age
    // }

    const details = [
        ['Name', data.details.name],
        ['Date of Birth', data.details.age.join(' - ')],
        // ['Age', getAge()],
        ['Gender', data.details.gender],
        ['Religon', data.details.religion],
        ['Nationality', data.details.nationality],
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Experiences = ({ data }: { data: TSectionExperience }) => {
    // console.log(data)


    const xpFactory = (xps: Array<TExperience>) => (
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
                        {
                            xp.description
                                ?
                                typeof xp.description === 'string'
                                    ? <p>{xp.description}</p>
                                    : (
                                        <ul>
                                            {
                                                xp.description.map(desc => (
                                                    <li>{desc}</li>
                                                ))
                                            }
                                        </ul>
                                    )
                                : ''
                        }
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

    const achievements = () => {
        const sorted_points = data.points
            .map(p => p)
            .sort((a, b) => Number(b.date) - Number(a.date))

        const half = Math.ceil(sorted_points.length / 2)

        return [sorted_points.slice(0, half), sorted_points.slice(half,)].map(points => (
            <div className="col-lg-6">
                <ul className="achievement-list">
                    {
                        points.map((point: TAchievementsPoint) => (
                            <li key={Math.random()}>
                                <div className="name"><strong>{capitalizeAll(point.name)}</strong></div>
                                {ifElem(point.description, <div>{point.description}</div>)}
                                <div className="info">
                                    <span>
                                        {point.date}
                                    </span>
                                    {ifElem(
                                        point.attachments?.length,
                                        <>
                                            <span>-</span>
                                            <span>[</span>
                                            <span className="attachments">

                                                {
                                                    point.attachments?.map((attachment: string, i: number) => (
                                                        <a key={Math.random()} className="attachment-link" href={`/static/attachments/${attachment}`} target="_blank" rel="noreferer noopener">{i + 1}</a>
                                                    ))
                                                }
                                            </span>
                                            <span>]</span>
                                        </>

                                    )}
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>
        ))
    }

    return (
        <section id="achievements" className="body-colored">
            <div className="container">
                <h2 className="section-header">Achievements</h2>
                {/* <p className="lead">{data.header.lead}</p> */}
                <hr />
                <div className="content">
                    <div className="row">
                        {achievements()}
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
                            <a href="https://www.linkedin.com/in/baha-hamdulay-mba-35888314" target="_blank" rel="noreferer noopener">
                                <img src="/static/img/svg/linkedin.svg" alt="" />
                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="https://join.skype.com/invite/iBkD3OzH8hh4" target="_blank" rel="noreferer noopener">
                                <img src="/static/img/svg/skype.svg" alt="" />

                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="mailto:baha4baha@gmail.com">
                                <img src="/static/img/svg/mail.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="hire-me">
                        <h3>Mobile</h3>
                        <h4><a href="tel:+917698687729">+91 76986 87729</a></h4>
                        <h4><a href="tel:+97455987574">+974 55987574</a></h4>
                    </div>
                </div>
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
            {/* <Projects data={state.data.projects} /> */}
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