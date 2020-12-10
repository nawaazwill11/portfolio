import { connect } from 'react-redux'

const App = ({ a }) => {
    return <h1>Hello, {a}!</h1>
}

const mapStateToProps = (store) => {
    console.log(store)

    return {
        a: store.a
    }
}

export default connect(mapStateToProps)(App)