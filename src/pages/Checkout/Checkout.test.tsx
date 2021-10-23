/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/Checkout/Checkout.test.tsx

Created with;
$ npx generate-react-cli component Checkout --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import Checkout from './Checkout'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/Checkout'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<Checkout />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Checkout {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
