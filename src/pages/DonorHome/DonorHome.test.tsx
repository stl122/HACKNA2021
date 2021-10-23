/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/DonorHome/DonorHome.test.tsx

Created with;
$ npx generate-react-cli component DonorHome --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import DonorHome from './DonorHome'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/DonorHome'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<DonorHome />', () => {
  let component

  beforeEach(() => {
    component = shallow(<DonorHome {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
