/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/FindRequests/FindRequests.test.tsx

Created with;
$ npx generate-react-cli component FindRequests --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import FindRequests from './FindRequests'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/FindRequests'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<FindRequests />', () => {
  let component

  beforeEach(() => {
    component = shallow(<FindRequests {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
