import ReactDOM from 'react-dom'
import '../styles/index.scss'

const Home = () => {
    return <h1>Home!!!!!!</h1>
}

const app = Home

const root_el = document.getElementById('root')

const render = (renderApp) => {
    ReactDOM.render(renderApp(), root_el)
}

if (module.hot) {
    module.hot.accept(Home, function () {
        console.log('Accepting the updated printMe module!');
        render(app)
    })
}

render(app)