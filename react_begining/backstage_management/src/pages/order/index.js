import React from 'react';
import { Card, Button, Table, Form, Select, Modal, DatePicker, message } from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
import BaseForm from '../../components/BaseForm'
const FormItem = Form.Item;
const Option = Select.Option;
export default class Order extends React.Component {
  state = {
    orderInfo: {},
    orderConfirmVisble: false
  }
  params = {
    page: 1
  }
  formList = [
    {
      type: 'SELECT',
      label: '城市',
      field: 'city',
      placeholder: '全部',
      initialValue: '1',
      width: 80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
    },
    {
      type: '时间查询'
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field: 'order_status',
      placeholder: '全部',
      initialValue: '1',
      width: 80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束' }]
    }
  ]
  componentDidMount() {
    this.requestList()
  }

  handleFilter = (params) => {
    this.params = params;
    this.requestList();
  }
  requestList = () => {
    let _this = this;
    axios.ajax({
      url: '/order-list.json',
      data: {
        params: this.params
      }
    }).then((res) => {
      let list = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      });
      this.setState({
        list,
        pagination: Utils.pagination(res, (current) => {
          _this.params.page = current;
          _this.requestList();
        })
      })
    })
  }
  // 订单结束确认
  handleConfirm = () => {
    let item = this.state.selectedItem;
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请选择一条订单进行结束'
      })
      return;
    }
    axios.ajax({
      url: '/order-ebike.json',
      data: {
        params: {
          orderId: item.id
        }
      }
    }).then((res) => {
      if (res.code == 0) {
        this.setState({
          orderInfo: res.result,
          orderConfirmVisble: true
        })
      }
    })
  }

  // 结束订单
  handleFinishOrder = () => {
    let item = this.state.selectedItem;
    axios.ajax({
      url: '/order-finish.json',
      data: {
        params: {
          orderId: item.id
        }
      }
    }).then((res) => {
      if (res.code == 0) {
        message.success('订单结束成功')
        this.setState({
          orderConfirmVisble: false
        })
        this.requestList();
      }
    })
  }
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }
  render() {
    const columns = [
      {
        title: '订单编号',
        dataIndex: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name'
      },
      {
        title: '手机号',
        dataIndex: 'mobile'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'start_time'
      },
      {
        title: '结束时间',
        dataIndex: 'end_time'
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee'
      },
      {
        title: '实付金额',
        dataIndex: 'user_pay'
      }
    ]
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary">订单详情</Button>
          <Button type="primary" style={{ marginLeft: 10 }} onClick={this.handleConfirm}>结束订单</Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
          />
        </div>
        <Modal
          title="结束订单"
          visible={this.state.orderConfirmVisble}
          onCancel={() => {
            this.setState({
              orderConfirmVisble: false
            })
          }}
          onOk={this.handleFinishOrder}
          width={600}
        >
          <Form layout="horizontal">
            <FormItem label="订单编号" {...formItemLayout}>
              {this.state.orderInfo.bike_sn}
            </FormItem>
            <FormItem label="下单时间" {...formItemLayout}>
              {this.state.orderInfo.start_time}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}