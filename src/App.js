import React, { Component } from 'react'
import '@/style/normalize.less'
import '@/style/minxin.less'
import styles from './App.module.less'
import RouterWrap from './routers/index.js'
import { Provider } from 'react-redux'
import store from '@/store/store.js'
import { saveProv } from './store/prov/action';

class App extends Component {
  async componentDidMount() {
    console.log('=== App mount ====')
    let res = await this.http(this.url.authorityList,{});
    if(res.success){
      store.dispatch(saveProv(res.dataList))
    }else{
      store.dispatch(saveProv([]))
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
