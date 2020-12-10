import { Application } from 'express'

import {
    ROOT_ROUTE,
    PORTFOLOIO_ROUTE,
} from '../shared/routes'

import {
    rootPage,
    portfolioPage,
} from './controllers/web'


function apiRouter(app: Application) {
}

function webRouter(app: Application) {
    app.get(ROOT_ROUTE, rootPage)
    
    app.get(PORTFOLOIO_ROUTE, portfolioPage)

    app.get('*', (req, res) => res.redirect('/'))
}


export default function router(app: Application) {
    apiRouter(app)
    webRouter(app)
}