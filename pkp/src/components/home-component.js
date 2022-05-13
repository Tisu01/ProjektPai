import React, { Component} from "react";
import './Home.css';
import { RightOutlined,SearchOutlined  } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {
  Layout,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Space,
  Tooltip,
} from 'antd';
import UserService from "../services/user-service";
const { Header, Content } = Layout;
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
  return (

<div>
      <Form labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal"
      initialValues={{size: '20'}}
      onValuesChange='50'
      size='50'
    >

      <Form.Item label="FROM">
        <Input type='text'/>
      </Form.Item>
      <Form.Item label="TO:">
        <Input type='text'/>
       </Form.Item>

<Form.Item label="DATE:">
        <Input type='date'/>
       </Form.Item>


        <br />
      <Form.Item>
        <Button type="primary" size="large">
              Search
            </Button>

      </Form.Item>
    </Form>


</div>


    );
  }
}