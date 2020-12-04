import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'

let app = App
const root_element = document.getElementById('root')

const render = (renderApp) => {
    ReactDOM.render(renderApp(), root_element)
}

if (module.hot) {
    module.hot.accept(App, function () {
        console.log('Accepting the updated printMe module!');
        app = require('./App').default
        render(app)
    })
}

render(app)