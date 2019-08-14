import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' //注入route到props
import { Form, Icon, Input, Select, Button, Modal } from 'antd'

import formStyle from './MyForm.module.less'

class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {},
      roomList: []
    }
  }
  async componentDidMount() {
    let res = await this.http(this.url.pageForm, {})
    if (res.success) {
      let form = Object.assign(
        {
          checkRoom: null
        },
        res.data
      )
      this.setState({
        form: form,
        roomList: res.dataList
      })
    } else {
      this.setState({
        form: {},
        roomList: []
      })
    }
  }
  handleSelectChange = value => {
    console.log(value)
  }
  handleSubmit = async e => {
    e.preventDefault()
    let res = await this.http(
      this.url.saveForm,
      this.props.form.getFieldsValue()
    )
    if (res.success) {
      this.props.history.push('/article/45444')
    } else {
      Modal.warning({
        title: '提示',
        content: res.message
      })
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { Option } = Select
    const { TextArea } = Input
    const roomOpt = this.state.roomList.map(item => (
      <Option key={item.roomId} value={item.roomId}>
        {item.roomName}
      </Option>
    ))
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 16,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 0
        }
      }
    }
    return (
      <div>
        <Form
          {...formItemLayout}
          onSubmit={this.handleSubmit}
          className="login-form"
        >
          <Form.Item label="名称">
            {getFieldDecorator('testName', {
              rules: [
                { required: true, message: 'Please input your testName!' }
              ],
              initialValue: this.state.form.testName
            })(
              <Input
                prefix={
                  <Icon type="testName" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="testName2"
              />
            )}
          </Form.Item>
          <Form.Item label="机房" {...tailFormItemLayout}>
            {getFieldDecorator('checkRoom', {
              initialValue: this.state.form.roomId
            })(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                {roomOpt}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="备注">
            {getFieldDecorator('remark', {
              initialValue: this.state.form.remark
            })(<TextArea autosize={{ minRows: 2, maxRows: 6 }}/>)}
          </Form.Item>
          <Form.Item>
            <Button className={formStyle.newStyle} type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default withRouter(
  Form.create({
    onFieldsChange(props, changedFields, allFields) {
      console.log('============= onFieldsChange ================')
      console.log(props)
      console.log(changedFields)
      console.log(allFields)
      console.log(this)
    }
  })(MyForm)
)
