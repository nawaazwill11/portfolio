import express from 'express'
import fs from 'fs'
import path from 'path'
import morgan from 'morgan'

import router from './router'

const app = express()
const log_file = (() => {
    const date = new Date()
    const filename = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}--${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.log`
    return fs.createWriteStream(path.join(`src/server/logs/${filename}`))
})()

const log_to_console = morgan('dev')
const log_to_file = morgan('combined', { stream: log_file })

app.use(log_to_console)
app.use(log_to_file)

app.get('*', (req, res, next) => {
    // do something on every request
    next()
})

router(app)

export default app