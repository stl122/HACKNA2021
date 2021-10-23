// src/AppRouter.tsx

import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Landing from './pages/Landing/Landing'

const AppRouter = () => (
  <Router>
    <Suspense fallback={<span>Loading...</span>}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Provider>
    </Suspense>
  </Router>
)

export default AppRouter
