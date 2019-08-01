import moment from 'moment';
import React, { Component } from 'react'
import { Modal, Input, DatePicker } from 'antd';

const dateFormat = 'YYYY-MM-DD HH:mm';

export default class EditDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: null
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.visible && this.props.id && !prevProps.visible) {
      this.initPage();
    }
  }
  initPage = async () => {
    let res = await this.http(this.url.listGET, {
      id: this.props.id
    }, 'get');
    if (res.success) {
      this.setState({
        name: res.data.name,
        time: res.data.time || null
      })
    }
  }
  handleOk = async () => {
    let res = await this.http(this.url.saveEdit, {
      id: this.props.id,
      name: this.state.name,
      time: this.state.time
    });
    if (res.success) {
      this.props.closeDia(true);
    } else {
      Modal.warning({
        title: '提示',
        content: res.message
      })
    }
  }
  handleCancel = () => {
    this.props.closeDia();
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  onChange = (date, ds) => {
    console.log(date);
    console.log(ds);
    this.setState({
      time: ds
    });
  }

  render() {
    return (
      <Modal
        title="编辑"
        closable
        wrapClassName="dialog-content"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}>
        <p>
          <label>name:</label>
          <Input value={this.state.name} onChange={this.handleChange} />
        </p>
        <div>
          <label>time:</label>
          <DatePicker
            showTime
            dateFormat={dateFormat}
            value={this.state.time ? moment(this.state.time, dateFormat) : null}
            onChange={this.onChange}
            onOk={this.onOk} />
        </div>
        <p>{this.state.name}</p>
        <p>{this.state.time}</p>
      </Modal>
    )
  }
}
