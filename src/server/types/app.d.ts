export type AttachController = {
    type: 'get' | 'post',
    handler: Function,
}

export type AppControllers = {
    get: Array<AttachController>,
    post: Array<AttachController>,
}