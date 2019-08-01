/**
 * Created by webmxj on 2018/5/25.
 */
import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@/components/loadable.js';


const DefaultLayout = loadable(() => import('@/layouts/DefaultLayout/DefaultLayout.js'));
const LoginUser = loadable(() => import('@/layouts/LoginUser/LoginUser.js'));
const NoMatch = loadable(() => import('@/layouts/NoMatch.js'));
export default class RouterWrap extends Component {
  render() {
    return (
      <div className="divflow">
        <HashRouter>
          <Switch>
            {/* <Route path="/" component={DefaultLayout} exact/>
            <Route path="/login" component={LoginUser} /> */}

            <Route path="/" component={LoginUser} exact />
            <Route path="/home" component={DefaultLayout} />
            <Route path="/404" component={NoMatch} />
            <Redirect from='*' to='/404' />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}