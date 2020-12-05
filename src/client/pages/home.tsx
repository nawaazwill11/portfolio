import ReactDOM from 'react-dom'

const Home = () => {
    return <h1>Home</h1>
}

const component = Home()

const root_el = document.getElementById('root')
ReactDOM.render(component, root_el)