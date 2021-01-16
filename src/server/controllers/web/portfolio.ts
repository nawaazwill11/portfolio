import fs from 'fs'
import path from 'path'
import renderPage from '../../renderPage'
import meta from '../../meta'
import App from '../../../shared/pages/Portfolio'

function portfolioPage(req, res) {
    // console.log('portofoling...')
    const id = 'portfolio'
    const file_location = path.resolve('src/server/static')

    const file_name = 'database.json'
    let data = {}
    try {
        if ((fs.readdirSync(file_location, 'utf-8')).includes(file_name)) {
            data = JSON.parse(fs.readFileSync(path.join(file_location, file_name), 'utf-8'))
            console.log(data)
        }
    } catch (error) {
        res.status(500)
        console.log(error)
        return res.end({ error: "It's not you, it's us. Retry shortly." })
    } finally {
        return res.end(renderPage(id, { initialized: false, data }, meta[id], App))
    }
}

export default portfolioPage