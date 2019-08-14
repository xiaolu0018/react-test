import React, { Component } from 'react'
import { Tabs } from 'antd'
import loadable from '@/components/loadable.js'
const MyForm = loadable(() => import('./tabs/MyForm.js'))
const MyList = loadable(() => import('./tabs/MyList.js'))
const { TabPane } = Tabs

export default class Article extends Component {
  constructor() {
    super()
    this.state = {
      actTab: '1'
    }
  }
  componentDidMount() {
    this.initPage()
  }
  initPage = async () => {
    console.log(this.props.history.push('/home/article/2'))//路由跳转
    console.log('文章页面渲染')
  }
  changeTab = activeKey => {
    this.setState({
      actTab: activeKey
    })
  }
  render() {
    return (
      <div>
        <Tabs
          type="card"
          activeKey={this.state.actTab}
          onChange={this.changeTab}
        >
          <TabPane tab="Tab 1" key="1">
            {this.state.actTab === '1' ? <MyList /> : <div />}
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            {this.state.actTab === '2' ? <MyForm /> : <div />}
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
