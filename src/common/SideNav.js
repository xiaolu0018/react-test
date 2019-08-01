import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' //注入route到props
import { Menu, Icon } from 'antd'
class SideNav extends Component {
  state = {
    current: 'home'
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
  }
  componentDidMount() {
    // 监听路由变化
    // console.log(this.props.history.location.pathname)
    //初始化
    this.setState({
      current: this.props.history.location.pathname.split('/').pop()
    })
    //监听路由
    this.props.history.listen(route => {
      // console.log(route);
      this.setState({
        current: route.pathname.split('/').pop()
      })
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);
    // console.log(this.props)
  }
  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['home']}
        selectedKeys={[this.state.current]}
        onClick={this.handleClick}
      >
        <Menu.Item key="home">
          <Icon type="desktop" />
          <span>首页</span>
          <Link to="/home"></Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Icon type="user" />
          <span>关于我</span>
          <Link to="/home/about"></Link>
        </Menu.Item>
        <Menu.Item key="article">
          <Icon type="team" />
          <span>内容</span>
          <Link to="/home/article"></Link>
        </Menu.Item>
        {this.Auth('resource:list') ? (
          <Menu.Item key="resource">
            <Icon type="file" />
            <span>资源</span>
            <Link to="/home/resource"></Link>
          </Menu.Item>
        ) : null}
      </Menu>
    )
  }
}
export default withRouter(SideNav)
