const elementor = (selector) => document.querySelector(selector)

const element_list = [
    {
        name: 'profile',
        element: elementor('#profile'),
    },
    {
        name: 'experiences',
        element: elementor('#experiences'),
    },
    {
        name: 'abilities',
        element: elementor('#abilities'),
    },
    {
        name: 'projects',
        element: elementor('#projects'),
    },
    {
        name: 'contact',
        element: elementor('#contact'),
    }
]

element_list.forEach((node, i) => {
    let low = node.element.offsetTop - 10
    let high = i < element_list.length - 1 ? element_list[i + 1].element.offsetTop - 10 : 0

    const window_percent = window.innerHeight / 100

    if (node.name === 'projects') {
        high -= window_percent * 20 - 1
    }
    if (node.name === 'contact') {
        low -= window_percent * 20 - 1
        high = window.innerHeight + low
    }

    element_list[i] = {
        ...element_list[i],
        range: { low, high }
    }
})

let active_nav = ''
let previous_time = 0
const throttle = 50

function scrollSpyNav() {
    const current = this.scrollY
    const now = new Date().getTime()

    function navStyling(active_nav) {
        element_list.forEach((node) => {
            const nav_item = document.querySelector(`.nav-item [href="#${node.name}"]`).parentElement
            if (node.name !== active_nav) {
                return nav_item.classList.remove('active')
            }
            nav_item.classList.add('active')
        })
    }

    function processScroll() {
        element_list.forEach((node) => {
            if (current >= node.range.low && current <= node.range.high && active_nav !== node.name) {
                active_nav = node.name
                console.log(active_nav)
                navStyling(active_nav)
            }
            if (current < window.innerHeight) {
                console.log('topped')
            }
        })
    }

    if (previous_time && now - previous_time < throttle) {
        return false
    }
    previous_time = now
    processScroll()
}


window.addEventListener('scroll', scrollSpyNav)
window.addEventListener('load', scrollSpyNav)