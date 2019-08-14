import React, { Component } from 'react'
import HeadNav from '@/common/HeadNav'
import SideNav from '@/common/SideNav'
// import styles from './DefaultLayout.module.less'
import { Layout } from 'antd'

import { Route, Switch } from 'react-router-dom'
import AuthRoute from '@/components/AuthRoute.js'

import loadable from '@/components/loadable.js'
const { Header, Sider, Content } = Layout
const Home = loadable(() => import('@/pages/Home/Home.js'))
const About = loadable(() => import('@/pages/About/About.js'))
const Article = loadable(() => import('@/pages/Article/Article.js'))
const Resource = loadable(() => import('@/pages/Resource/Resource.js'))

export default class DefaultLayout extends Component {
  state = {
    collapsed: true
  }
  onCollapse = collapsed => {
    this.setState({ collapsed })
  }
  render() {
    return (
      <Layout className="DefaultLayout divflow">
        <Header>
          <HeadNav />
        </Header>
        <Layout>
          <Sider
            collapsed={this.state.collapsed}
            collapsible
            defaultCollapsed
            onCollapse={this.onCollapse}
            theme="dark"
          >
            <SideNav />
          </Sider>
          <Content className="content-wrap scrollbar">
            <Switch>
              <Route path={this.props.match.url + '/'} component={Home} exact />
              <Route path={this.props.match.url + '/about'} component={About} />
              <Route
                path={this.props.match.url + '/article'}
                component={Article}
              />
              {/* <Route path={this.props.match.url+'/resource'} component={Resource}  /> */}
              {/* 权限 */}
              <AuthRoute
                authKey="resource:list"
                path={this.props.match.url + '/resource'}
                component={Resource}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
