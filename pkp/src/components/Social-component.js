import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";
import SocialService from "../services/SocialService";
import './connections_style.css';
import { useParams} from 'react-router-dom'
import {useNavigate} from "react-router";
import { RouteComponentProps, withRouter } from 'react-router-class-tools';

import {
  Input,
  Button,
  DatePicker,
  InputNumber,
  Card,
} from 'antd';

export const  withNavigation = (Component : Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {
        url:""
    };
  }

  componentDidMount() {

  }

  render() {
  return (
<div className="row" id="rowID">
<h2>O tutaj rób</h2>
</div>
          );

}
}

export default withRouter(Social);