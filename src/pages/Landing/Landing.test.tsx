/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/Landing/Landing.test.tsx

Created with;
$ npx generate-react-cli component Landing --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import Landing from './Landing'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/Landing'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<Landing />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Landing {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
