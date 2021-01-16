"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _reactRedux = require("react-redux");

const Navbar = () => {
  const links = [{
    name: 'Profile',
    href: '#profile'
  }, {
    name: 'Experience',
    href: '#experiences'
  }, {
    name: 'Abilities',
    href: '#abilities'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const links_ref = [];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("nav", {
      id: "navbar",
      className: "navbar navbar-expand-lg navbar-dark bg-dark",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#nav-list",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "collapse navbar-collapse",
        id: "nav-list",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          className: "navbar-nav",
          children: links.map((link, i) => {
            links_ref[i] = (0, _react.useRef)();
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              ref: links_ref[i],
              className: `nav-item ${i === 0 ? 'active' : ''}`,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: link.href,
                className: "nav-link",
                "data-toggle": "collapse",
                "data-target": "#nav-list",
                children: link.name
              })
            }, Math.random());
          })
        })
      })]
    })
  });
};

const Introduction = ({
  data
}) => {
  const background = () => {
    return data.background[Math.floor(Math.random() * 3)];
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    id: "introduction",
    style: {
      backgroundImage: `url('/static/img/${background()}')`
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container text-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "display-3 section-header",
        children: data.header.large
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "lead",
        children: data.header.lead
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "overlay"
    })]
  });
};

const Profile = ({
  data
}) => {
  const getAge = () => {
    const today = new Date();
    let age = today.getFullYear() - new Date(data.details.age).getFullYear();
    let has_birthday_passed = false;

    if (today.getMonth() + 1 > 11 || today.getMonth() + 1 === 11 && today.getDate() >= 24) {
      has_birthday_passed = true;
    }

    return !has_birthday_passed ? age - 1 : age;
  };

  const details = [['Name', data.details.name], ['Age', getAge()], ['Location', data.details.location], ['Hobbies', data.details.hobbies.join(', ')]];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "profile",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Profile"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "lead",
        children: data.header.lead
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "content",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row profile-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "col-lg-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              children: "About me"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: data.about_me
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-lg-4 text-center py-4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              className: "author-img",
              src: `/static/img/${data.img}`,
              alt: data.details.name
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "col-lg-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              children: "Details"
            }), details.map(info => /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                  className: "info-head",
                  children: info[0]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: info[1]
              })]
            }, Math.random()))]
          })]
        })
      })]
    })
  });
};

const Experiences = ({
  data
}) => {
  // console.log(data)
  const xpFactory = xps => xps.map(xp => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col-lg-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: xp.premise.href,
            children: xp.premise.name
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: xp.duration
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col-lg-8",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: xp.title
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: xp.description
        }), xp.roles ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
            children: "Roles:"
          }), " ", xp.roles.join(', ')]
        }) : '']
      })]
    }, Math.random());
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "experiences",
    className: "body-colored",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Experiences"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "lead",
        children: data.header.lead
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Educations"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "experiences",
          children: xpFactory(data.educations)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Careers"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "experiences",
          children: xpFactory(data.careers)
        })]
      })]
    })
  });
};

const Abilities = ({
  data
}) => {
  // console.log(data)
  const skillFactory = (skills, half) => [skills.slice(0, half), skills.slice(half)].map(part_skills => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "col-lg-6",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "bullet-less",
        children: part_skills.map(skill => /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "skill",
            children: skill.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "rank",
            children: new Array(5).fill(skill.rank).map((v, i) => {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: `/static/img/svg/star${i < v ? '-fill' : ''}.svg`,
                alt: ""
              }, Math.random());
            })
          })]
        }, Math.random()))
      })
    }, Math.random());
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "abilities",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Abilities"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "lead",
        children: data.header.lead
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Software Skills"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row",
          children: skillFactory(data.software, Math.ceil(data.software.length / 2))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Development Tools"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row",
          children: skillFactory(data.tools, Math.ceil(data.tools.length / 2))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Verbal Language"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row",
          children: skillFactory(data.languages, Math.ceil(data.languages.length / 2))
        })]
      })]
    })
  });
};

const Projects = ({
  data
}) => {
  const handleMouseIn = e => {
    const element = e.currentTarget;
    element.querySelector('.project-overview').style.top = 0;
  };

  const handleMouseOut = e => {
    const element = e.currentTarget;
    element.querySelector('.project-overview').style.top = '500px';
  };

  (0, _react.useEffect)(() => {
    const projects = document.querySelectorAll('#projects .project');
    projects.forEach(project => {
      project.addEventListener('mouseover', handleMouseIn);
      project.addEventListener('mouseout', handleMouseOut);
    });
    return () => {
      projects.forEach(project => {
        project.removeEventListener('mouseover', handleMouseIn);
        project.removeEventListener('mouseout', handleMouseOut);
      });
    };
  });

  const projectFactory = projects => projects.map(project => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "col-lg-6",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "project",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "project-image",
        src: `/static/img/project/${project.img}`,
        alt: project.name
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "project-overview",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
          children: project.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "info",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: project.description
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: project.tags.join(', ')
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "border-0",
            children: [project.duration, " ", project.ongoing ? '| On-going' : '']
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          className: "btn btn-primary",
          href: project.href,
          target: "_blank",
          rel: "noreferer noopener",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: "/static/img/svg/open.svg",
            alt: ""
          })
        })]
      })]
    })
  }, Math.random()));

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "projects",
    className: "body-colored",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Projects"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "lead",
        children: data.header.lead
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "content",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row",
          children: projectFactory(data.projects)
        })
      })]
    })
  });
};

const Contact = ({
  data
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
    id: "contact",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Contact"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "lead",
        children: data.header.lead
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row handler-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-4 text-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "https://www.linkedin.com/in/nawaaz-kortiwala-a01099113/",
              target: "_blank",
              rel: "noreferer noopener",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: "/static/img/svg/linkedin.svg",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-4 text-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "https://www.github.com/nawaazwill11",
              target: "_blank",
              rel: "noreferer noopener",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: "/static/img/svg/github.svg",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-4 text-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "mailto:nawaazkortiwala@gmail.com",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: "/static/img/svg/mail.svg",
                alt: ""
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "text-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: "Want to hire me?"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
            children: ["Contact me on: ", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "tel:+919737177329",
              children: "+91 97371 77329"
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "reference-attribute",
      children: ["Inspired by ", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "http://www.pascalvangemert.nl/",
        target: "_blank",
        rel: "noreferer noopener",
        children: "Pascal Van Gemert"
      })]
    })]
  });
};

const Page = ({
  state,
  setActiveNav
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Navbar, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Introduction, {
      data: state.data.introduction
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Profile, {
      data: state.data.profile
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Experiences, {
      data: state.data.experiences
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Abilities, {
      data: state.data.abilities
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Projects, {
      data: state.data.projects
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Contact, {
      data: state.data.contact
    })]
  });
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Page);

exports.default = _default;