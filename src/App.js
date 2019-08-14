import React, { Component } from 'react'
import '@/style/normalize.less'
import '@/style/minxin.less'
import styles from './App.module.less'
import RouterWrap from '@/router/index.js'
import { Provider } from 'react-redux'
import store from '@/store/store.js'
import { saveProv } from './store/prov/action';
import {saveUser,clearUser} from './store/user/action';
class App extends Component {
  componentDidMount() {

  }
  async getProvList(){
    let res = await this.http(this.url.authorityList,{});
    if(res.success){
      store.dispatch(saveProv(res.dataList))
    }else{
      store.dispatch(saveProv([]))
    }
  }
  async getUserInof(){
    let res = await this.http(this.url.userInfo,{});
    if(res.success){
      store.dispatch(saveUser(res.dataList))
    }else{
      store.dispatch(clearUser())
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div className={styles.App}>
          <RouterWrap />
        </div>
      </Provider>
    )
  }
}

export default App
