import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../shared/init-store'
import App from '../shared/App'
import '../shared/styles/index.scss'

// Read the state sent with markup
const setup = window.__SETUP__
// delete the state from global window object
delete window.__SETUP__

// reproduce the store used to render the page on server
const { index, preloaded_state } = setup
const store = configureStore(index, preloaded_state)

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#root')
)
