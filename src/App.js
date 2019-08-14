import React, { Component } from 'react'
import '@/style/normalize.less'
import '@/style/minxin.less'
import styles from './App.module.less'
import RouterWrap from '@/router/index.js'
import { Provider } from 'react-redux'
import store from '@/store/store.js'
import { saveProv } from './store/prov/action';
import {saveUser,clearUser} from './store/user/action';
import { createHashHistory } from 'history';
class App extends Component {
  constructor(props){
    super(props)
    this.getUserInof();
    this.getProvList();
  }
  getProvList = async () => {
    let res = await this.http(this.url.authorityList,{});
    if(res.success){
      store.dispatch(saveProv(res.dataList))
    }else{
      store.dispatch(saveProv([]))
    }
  }
  getUserInof = async () => {
    let res = await this.http(this.url.userInfo,{});
    if(res.success){
      store.dispatch(saveUser(res.data))
    }else{
      store.dispatch(clearUser());
      const history = createHashHistory();
      history.replace('/login');
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
