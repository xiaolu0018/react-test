import React, { Component } from 'react'
import {  Icon } from 'antd'
import styles from './HeadNav.module.less'
export default  class HeadNav extends Component {
  componentDidMount(){
    // 监听路由变化
    // console.log(this.props.history.location.pathname)
    //初始化

  }
  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);
    // console.log(this.props)
  }
  render() {
    return (
      <div id="HeadNav">
        <div className="nav-wrap">
          <div className={styles.navLogoWrap}>
            <Icon type="global" className={styles.navLogo}/>
            <h1 style={{display:'inline-block',color:'#fff',paddingLeft:'2em'}}>REACT TEST</h1>
          </div>
          <div className="nav-info-wrap">
          </div>
        </div>
      </div>
    )
  }
}
