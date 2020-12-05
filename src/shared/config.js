export const NODE_ENV = process.env.NODE_ENV || 'development'
export const IS_PROD = NODE_ENV === 'production' ? true : false
export const WDS_HOST = 'http://localhost'
export const WDS_PORT = process.env.WDS_PORT || 7000
export const BUILD_PATH = 'build'
export const ASSET_PATH = '/assets'
export const STATIC_PATH = '/static'
export const DEV_SERVER_PUBLIC_PATH = '/dist'
export const DEV_SERVER_ROOT_PATH = `${WDS_HOST}:${WDS_PORT}`
export const ASSET_PUBLIC_PATH = IS_PROD ? ASSET_PATH : DEV_SERVER_ROOT_PATH + DEV_SERVER_PUBLIC_PATH
export const PROD_STATIC_PATH = BUILD_PATH + ASSET_PATH
export const TEMPLATE_PATH = IS_PROD ? PROD_STATIC_PATH : DEV_SERVER_ROOT_PATH + DEV_SERVER_PUBLIC_PATH