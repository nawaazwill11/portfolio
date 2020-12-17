function createElementRanges(elements) {
    elements.forEach((node, i) => {
        const margin = 1
        let low = node.element.offsetTop - margin
        let high = i < elements.length - 1 ? elements[i + 1].element.offsetTop - margin : 0

        const window_percent = window.innerHeight / 100

        if (node.name === 'projects') {
            high -= window_percent * 20 - 1
        }
        if (node.name === 'contact') {
            low -= window_percent * 20 - 1
            high = window.innerHeight + low
        }

        elements[i] = {
            ...elements[i],
            range: { low, high }
        }
    })
}


function navStyling(elements, active_nav) {
    elements.forEach((node) => {
        const nav_item = document.querySelector(`.nav-item [href="#${node.name}"]`).parentElement
        if (node.name !== active_nav) {
            return nav_item.classList.remove('active')
        }
        nav_item.classList.add('active')
    })
}


function scrollSpyNav(elements, active_nav, nav) {
    const current = window.scrollY

    elements.forEach((node) => {
        if (current >= node.range.low && current <= node.range.high && active_nav.get() !== node.name) {
            active_nav.set(node.name)
            navStyling(elements, active_nav.get())
        }

        if (current >= window.innerHeight) {
            if (!nav.classList.contains('fixed')) {
                nav.classList.add('fixed')
            }
        } else {
            if (nav.classList.contains('fixed')) {
                nav.classList.remove('fixed')
            }
        }
    })
}


function navCollapseFix() {
    document.querySelectorAll('.nav-link').forEach((nav_link) => {
        nav_link.addEventListener('click', function() {
            document.querySelector('.navbar-toggler').click()
        })
    })
}


window.onload = () => {
    const elementor = (selector) => document.querySelector(selector)

    const element_list = [
        'profile',
        'experiences',
        'abilities',
        'projects',
        'contact'
    ]

    const initial_state = () => ({
        elements: ((elements) => elements.map((element) => ({
            name: element,
            element: elementor('#' + element)
        })))(element_list),
        active_nav: {
            nav: '',
            get: function () { return this.nav },
            set: function (nav) { this.nav = nav }
        },
        nav: elementor('#navbar')
    })

    const state = initial_state()

    createElementRanges(state.elements)
    navCollapseFix()

    window.addEventListener('scroll', () => scrollSpyNav(state.elements, state.active_nav, state.nav))
    window.addEventListener('resize', () => createElementRanges(state.elements))
}