import React from 'react'
import { Route,Redirect  } from 'react-router-dom'
import Auth from '@/assets/utils/Auth.js';
import store from '@/store/store.js';
// const NoMatch = loadable(() => import('@/layouts/NoMatch.js'));
// export default class AuthRoute extends Component {
//   render(){
//     if(this.props.authKey && AUTH(this.props.authKey)){
//       return <Route {...this.props}></Route>;
//     }else{
//       return null
//     }
//   }
// }
export default (props) => {
  let userInfo = store.getState().user;
  if(!userInfo){
    return <Redirect  to='/login' />;
  }
  //路由权限
  if(props.authKey){
    if(Auth(props.authKey)){
      return <Route {...props}></Route>;
    }else{
      return <Redirect  to='/404' />
    }
  }else{
    return <Route {...props}></Route>;
  }

}

