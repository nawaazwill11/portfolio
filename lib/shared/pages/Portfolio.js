"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _reactRedux = require("react-redux");

function ifElem(data, elem, not = '') {
  return data ? elem : not;
}

function capitalizeAll(string) {
  return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

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
    name: 'Achievements',
    href: '#achievements'
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
  const background = data.background[Math.floor(Math.random() * data.background.length)];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    id: "introduction",
    style: {
      backgroundImage: `url('/static/img/background/${background}')`
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "container text-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "display-3 section-header",
        children: data.header.large
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "overlay"
    })]
  });
};

const Profile = ({
  data
}) => {
  // const getAge = () => {
  //     const today = new Date()
  //     let age = today.getFullYear() - new Date(data.details.age).getFullYear()
  //     let has_birthday_passed = false
  //     if (today.getMonth() + 1 > 11 || (today.getMonth() + 1 === 11 && today.getDate() >= 24)) {
  //         has_birthday_passed = true
  //     }
  //     return !has_birthday_passed ? age - 1 : age
  // }
  const details = [['Name', data.details.name], ['Date of Birth', data.details.age.join(' - ')], // ['Age', getAge()],
  ['Gender', data.details.gender], ['Religin', data.details.religion], ['Nationality', data.details.nationality], ['Hobbies', data.details.hobbies.join(', ')]];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "profile",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Profile"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "content",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row profile-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "col-lg-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              children: "About me"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "about-me",
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
            target: "_blank",
            rel: "noreferer noopener",
            children: xp.premise.name
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: xp.duration
        }), xp.premise.location ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "location",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: "/static/img/svg/location.svg",
            alt: ""
          }), xp.premise.location]
        }) : '']
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col-lg-8",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: xp.title
          })
        }), xp.description ? typeof xp.description === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: xp.description
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          children: xp.description.map(desc => /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: desc
          }))
        }) : '', xp.roles ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
            children: "Roles:"
          }), " ", xp.roles ? xp.roles.join(', ') : '']
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
  const skillNodes = skills => {
    const half = Math.ceil(skills.length / 2); // sort skills in descending order

    skills.sort((a, b) => Number(b.rank) - Number(a.rank));
    return [skills.slice(0, half), skills.slice(half)].map(part_skills => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
    }, Math.random()));
  };

  const skillFactory = sections => sections.map((section, i) => {
    let section_name = section.name;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "ability",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: section_name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row",
          children: skillNodes(section.nodes)
        })]
      }, Math.random()), i < sections.length - 1 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}) : '']
    });
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "abilities",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Abilities"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "content",
        children: skillFactory(data.sections)
      })]
    })
  });
};

const Achievements = ({
  data
}) => {
  const achievements = () => {
    const sorted_points = data.points.map(p => p).sort((a, b) => Number(b.date) - Number(a.date));
    const half = Math.ceil(sorted_points.length / 2);
    return [sorted_points.slice(0, half), sorted_points.slice(half)].map(points => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "col-lg-6",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "achievement-list",
        children: points.map(point => /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "name",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: capitalizeAll(point.name)
            })
          }), ifElem(point.description, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: point.description
          })), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "info",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: point.date
            }), ifElem(point.attachments?.length, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "-"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "["
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "attachments",
                children: point.attachments?.map((attachment, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                  className: "attachment-link",
                  href: `/static/attachments/${attachment}`,
                  target: "_blank",
                  rel: "noreferer noopener",
                  children: i + 1
                }, Math.random()))
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "]"
              })]
            }))]
          })]
        }, Math.random()))
      })
    }));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "achievements",
    className: "body-colored",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Achievements"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "content",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row",
          children: achievements()
        })
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          className: "hidden-link",
          href: project.href,
          children: "View"
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    id: "contact",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "section-header",
        children: "Contact"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row handler-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-4 text-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "https://www.linkedin.com/in/baha-hamdulay-mba-35888314",
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
              href: "https://join.skype.com/invite/iBkD3OzH8hh4",
              target: "_blank",
              rel: "noreferer noopener",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: "/static/img/svg/skype.svg",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-4 text-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "mailto:baha4baha@gmail.com",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: "/static/img/svg/mail.svg",
                alt: ""
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "hire-me",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: "Mobile"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "tel:+917698687729",
              children: "+91 76986 87729"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "tel:+97455987574",
              children: "+974 55987574"
            })
          })]
        })]
      })]
    })
  });
};

const Page = ({
  state,
  setActiveNav
}) => {
  console.log(state.data.achievements);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Navbar, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Introduction, {
      data: state.data.introduction
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Profile, {
      data: state.data.profile
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Experiences, {
      data: state.data.experiences
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Abilities, {
      data: state.data.abilities
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Achievements, {
      data: state.data.achievements
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