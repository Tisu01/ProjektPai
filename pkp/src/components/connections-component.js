import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";
import { DownloadOutlined  } from '@ant-design/icons';
import './connections_style.css';
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
  Card,
} from 'antd';
export default class Connections extends Component {
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
          <div className="train_box">
            <div className="arrival"><p>arrival</p></div>
            <div className="departure"><p>departure</p></div>
            <div className="price"><p>price:</p></div>
            <div className="btn"><Button type="primary" size='large'>choose</Button></div>
            <a className="right carousel-control slick-arrow" href="#" role="button" data-slide="next" aria-disabled="true">
            <span className="fa fa-angle-left" aria-hidden="true"></span>
            </a>


          </div>

          );

}
}
