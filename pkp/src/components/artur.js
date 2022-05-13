
import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";
import './connections_style.css';
import {
  Input,
  Button,
  DatePicker,
  InputNumber,
  Card,
} from 'antd';


export default class Artur extends Component {
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
<h2>Mijsce na twoja prace
<h3>to fioletowe tlo nas przesladuje :(</h3></h2>

          );
}
}
