import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'

function RouterConfig ({ history, app }) {
  const HomePage = dynamic({
    app,
    models: () => [import('@/models/home')],
    component: () => import('@/routes/home')
  })

  const DashboardPage = dynamic({
    app,
    models: () => [import('@/models/dashboard')],
    component: () => import('@/routes/dashboard')
  })

  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path='/home' component={HomePage} />
        <Route path='/dashboard' component={DashboardPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
