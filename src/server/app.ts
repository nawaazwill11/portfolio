import express from 'express'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

import { PROD_STATIC_PATH, TEMPLATE_PATH, IS_PROD, ASSET_PATH } from '../shared/config'

const app = express()

app.use(ASSET_PATH, express.static(PROD_STATIC_PATH))

app.get('*', (req, res, next) => {
    console.log(req.url)
    next()
})

const getFile = (filepath) => {
    return new Promise((resolve, reject) => {
        try {   
            if (IS_PROD) {
                return resolve(fs.readFileSync(filepath, 'utf-8'))
            }
            fetch(filepath)
                .then((response) => response.text())
                    .then((html_string) => resolve(html_string))

        } catch (error) {
            reject(error)
        }
    })    
} 

app.get('/', (req, res) => {
    getFile(`${TEMPLATE_PATH}/home.html`)
        .then((html_string) => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(html_string)
        })
})

export default app