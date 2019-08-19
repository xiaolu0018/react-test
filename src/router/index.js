/**
 * Created by webmxj on 2018/5/25.
 */
import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@/components/loadable.js'
// import AuthRoute from '@/components/AuthRoute.js'

const DefaultLayout = loadable(() => import('./DefaultLayout/DefaultLayout.js'))
const LoginUser = loadable(() => import('./LoginUser/LoginUser.js'))
const NoMatch = loadable(() => import('./NoMatch.js'))
export default class RouterWrap extends Component {
  render() {
    return (
      <div className="divflow">
        <HashRouter>
          <Switch>
            <Route path="/login" component={LoginUser} exact />
            <Route path="/404" component={NoMatch} exact />
            <Route path="/" component={DefaultLayout} />
            <Redirect from="*" to="/404" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
