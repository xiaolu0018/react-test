import React, { Component } from 'react'
import { Table, Button,Modal } from 'antd';
import EditDialog from "./EditDialog.js";
export default class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [],
      pageNum: 1,
      pageSize: 8,
      totalNum: 0,
      selectRow:{},
      diaVis:false,
      checkedRow:[],
      tabLoad:false
    };
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
        width:80
      },
      {
        title: 'ip',
        dataIndex: 'ip',
        key: 'ip',
        width:130
      },
      {
        title: 'pid',
        dataIndex: 'pid',
        key: 'pid',
        width:80
      },
      {
        title: 'pna',
        dataIndex: 'pna',
        key: 'pna',
      },
      {
        title: '日期',
        dataIndex: 'time',
        key: 'time',
        width:220
      },
      {
        title: 'rx',
        dataIndex: 'rx',
        key: 'rx',

      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          this.Auth('resource:edit') ? <Button onClick={() => this.editRow(text, record)}>修改</Button> : null
        ),
        width:80
      },
    ]
  }
  componentWillMount() {

  }

  componentDidMount() {
    this.initPage();
  }
  initPage = async () => {
    this.setState({
      tabLoad:true
    })
    let res = await this.http(this.url.test2, {
      pageNum: this.state.pageNum,
      pageSize: this.state.pageSize
    });
    if (res.success) {
      this.setState({
        tabList: res.dataList,
        pageNum: Number(res.pageNum) || 1,
        pageSize: Number(res.pageSize) || 8,
        totalNum: Number(res.totalNum) || 0,
        tabLoad:false
      })
    }else{
      Modal.warning({
        title: '提示',
        content: res.message
      })
      this.setState({
        tabList: [],
        pageNum:1,
        pageSize:8,
        totalNum: 0,
        tabLoad:false
      })

    }
  }
  editRow = (text,record) => {
    console.log(text);
    console.log(record);
    Modal.confirm({
      title:'提示',
      content:`确认修改 ${record.name} 的内容参数？`,
      onOk:() => {
        this.openEditDia(record)
      },
      onCancel:() => {
        this.setState({
          selectRow: {}
        })
      }
    })
  }
  openEditDia(row){
    this.setState({
      diaVis:true,
      selectRow:row
    })
  }
  closeEditDia = (isSave) => {
    this.initPage();
    this.setState({
      diaVis: false,
      selectRow: {}
    })
  }
  changeSelect = selectedRowKeys => {
    this.setState({
      checkedRow: (selectedRowKeys || [])
    })
  }
  batchDelRow = () => {//批量删除
    if(this.state.checkedRow.length){
      console.log(this.state.checkedRow)
      this.setState({
        checkedRow: []
      })
    }
  }
  render() {
    const rowSelection = {
      selectedRowKeys:this.state.checkedRow,
      onChange: this.changeSelect,
    };
    return (
      <div>
        <div>
          <span>已选{this.state.checkedRow.length}条数据 </span>
          <Button disabled={!this.state.checkedRow.length} onClick={this.batchDelRow}>批量删除</Button>
        </div>
        <Table
          loading={this.state.tabLoad}
          rowSelection={rowSelection}
          dataSource={this.state.tabList}
          rowKey='id'
          columns={this.columns}
          bordered
          pagination={{
            position: 'bottom',
            current: this.state.pageNum,
            pageSize: this.state.pageSize,
            total: this.state.totalNum,
            onChange: this.onChange,
          }}
          scroll={{
            y:380
          }}
          size="middle" />
        <EditDialog id={this.state.selectRow.id} closeDia={this.closeEditDia} visible={this.state.diaVis}></EditDialog>
      </div>
    )
  }
  onChange = (page, pageSize) => {
    this.setState({
      pageNum: page,
      pageSize: pageSize
    }, this.initPage);
  }
}
