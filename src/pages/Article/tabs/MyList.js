import React, { Component } from 'react'

export default class MyList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList:[]
    }
  }
  async componentDidMount() {
    console.log(this.props)
    let res = await this.http(this.url.tabList, {})
    if (res.success) {
      this.setState({
        dataList: res.dataList
      })
    }else{
       this.setState({
         dataList: []
       })
    }
  }
  componentDidUpdate(){

  }
  render() {
    let list = this.state.dataList.map(item => (
      <li key={item.id}>{item.name}</li>
    ));
    return <ul>{list}</ul>
  }
}
