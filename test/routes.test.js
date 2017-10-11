import { helloEndpointRoute, cardEndpointRoute } from '../src/shared/routes'

test('helloEndpointRoute', () => {
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndpointRoute(123)).toBe('/ajax/hello/123')
})

test('cardEndpointRoute', () => {
  expect(cardEndpointRoute()).toBe('/cards/:name')
  expect(cardEndpointRoute('Dark Magician')).toBe('/cards/Dark Magician')
})
