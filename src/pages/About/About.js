import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveUser, clearUser } from '@/store/user/action.js'
import { Icon,Modal } from 'antd'
import './About.less'
import '@/assets/icon/iconfont.css'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '/icon/iconfont.js',
  extraCommonProps:{
    color:'red',
    fill:'inherit',
    stroke:'inherit'
  }
});
class About extends Component {
  componentDidMount() {
    this.initPage()
  }

  initPage = async () => {
    let res = await this.http(this.url.userInfo, {})
    if (res.success) {
      this.props.saveUser(res.data)
    } else {
      Modal.warning({
        title: '提示',
        content: res.message
      })
    }
  }
  render() {
    return (
      <div>
        <i className="el-cloud-jiekou" style={{color:'red'}}></i>
        <IconFont style={{fontSize:'30px',color:'red'}} type="el-cloud-jiekou"></IconFont>
        <div>用户名：{this.props.user.name}</div>
        <div>联系方式：{this.props.user.phone}</div>
        {this.Auth('about:btn') ? <button>权限按钮</button> : null }
      </div>
    )
  }
}
export default connect(
  state => {
    return { user: state.user }
  },
  {
    saveUser,
    clearUser
  }
)(About)
