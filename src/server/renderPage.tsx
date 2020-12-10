import React from 'react'
import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'
import { Provider } from 'react-redux'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'

import initStore from '../shared/init-store'
import { MetaData, ScriptMeta } from './types/renderPage'
import { attachCustomHelpers } from './lib/handlerbars'
import { ASSET_PUBLIC_PATH } from '../shared/config'

const renderPage = (id: string, state: object, meta_data: MetaData, App): String => {
    // Load the store with initial and preloaded values values
    const store = initStore(id, state || {})
    // Wrap the app
    const app_html = renderToString(
        <Provider store={store} >
            <App />
        </Provider>
    )
    // Add custom helpers to Handlerbar for processing the meta_data
    attachCustomHelpers(Handlebars)

    // add-ons
    const link = [
        ...meta_data.link,
        {
            rel: 'stylesheet',
            href: `${ASSET_PUBLIC_PATH}/css/${id}.css`,
        }
    ]

    const pre_script = [
        ...meta_data.pre_script,
    ]

    const post_script = [
        ...meta_data.post_script,
        {
            src: `${ASSET_PUBLIC_PATH}/js/vendor.bundle.js`,
        },
        {
            src: `${ASSET_PUBLIC_PATH}/js/${id}.bundle.js`,
        }
    ]

    const script_with_content = [
        ...meta_data.script_with_content,
        {
            attr: [],
            content: `window.__SETUP__ = { preloaded_state: ${JSON.stringify(store.getState())}, index: '${id}' };`
        }
    ]

    // Build template with meta data
    const source = fs.readFileSync(path.resolve('public/index.html'), 'utf-8')
    const template = Handlebars.compile(source)
    // console.log(meta_data)
    return template({
        title: meta_data.title,
        meta: meta_data.meta,
        link,
        pre_script,
        post_script,
        script_with_content,
        app_html,
    })
}

export default renderPage