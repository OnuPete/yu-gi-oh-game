// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'
export const EDITOR_PAGE_ROUTE = '/editor'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`

export const cardEndpointRoute = (name: ?string) => `/cards/${name || ':name'}`
