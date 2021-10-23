/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/Login/Login.test.tsx

Created with;
$ npx generate-react-cli component Login --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import Login from './Login'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/Login'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<Login />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Login {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
