import React from 'react'
import { Route,Redirect  } from 'react-router-dom'
import Auth from '@/utils/Auth.js';
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
  //路由权限
  if(props.authKey && Auth(props.authKey)){
    return <Route {...props}></Route>;
  }else{
    return <Redirect  to='/404' />
  }
}

