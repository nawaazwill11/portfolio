import renderPage from '../../renderPage'
import meta from '../../meta'
import App from '../../../shared/pages/Portfolio'

function portfolioPage(req, res) {
    const id = 'portfolio'
    
    return res.end(renderPage(id, {'a': 'Nawaaz'}, meta[id], App))
}

export default portfolioPage