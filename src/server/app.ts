import express from 'express'
import fs from 'fs'
import path from 'path'

// const express = require('express')
// const fs = require('fs')

const app = express()

const ASSET_PATH = '/assets'
const TEMPLATE_PATH = 'build/assets'

app.use(ASSET_PATH, express.static(TEMPLATE_PATH))

app.get('*', (req, res, next) => {
    console.log(req.url)
    next()
})

app.get('/', (req, res) => {
    return res.end(
        fs.readFileSync(`${TEMPLATE_PATH}/home.html`, 'utf-8')
    )
})

export default app