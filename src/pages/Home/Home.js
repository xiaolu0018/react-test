import React, { Component } from 'react'
import { List, Avatar } from 'antd'
export default class Home extends Component {
  state = {
    list: [],
    name: ''
  }
  componentDidMount() {
    this.init();
  }
  init = async () => {
    console.log(this.context.router)
    let res = await this.http(this.url.test2, {})
    if (res.success) {
      this.setState({
        list: res.dataList,
        name: res.data.name
      })
    }
  }
  render() {
    // const IconText = ({ type, text }) => (
    //   <span>
    //     <Icon type={type} style={{ marginRight: 8 }} />
    //     {text}
    //   </span>
    // );
    return (
      <div>
        首页
        <ul>
          <List
            itemLayout="vertical"
            size="large"
            header={<div>列表数据展示 - {this.state.name}</div>}
            footer={<div>列表尾部</div>}
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item
                key={item.id}
                extra={<img width={272} alt="logo" src={item.url} />}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="test.url.list">{item.pna}</a>}
                  description={item.rx}
                />
                {item.time}
              </List.Item>
            )}
          />
        </ul>
      </div>
    )
  }
}
