export type MetaData = {
    title: string,
    meta: Array<object>,
    link: Array<object>,
    pre_script: Array<object>,
    app_html?: any,
    post_script: Array<object>,
    script_with_content?: Array<object>,
}

export type ScriptMeta = {
    pre_script: Array<any>,
    post_script: Array<any>,
}