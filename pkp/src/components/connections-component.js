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
  /*
          <div className="train_box">
            <div className="arrival"><p>arrival</p></div>
            <div className="departure"><p>departure</p></div>
            <div className="price"><p>price:</p></div>
            <div className="btn"><Button type="primary" size='large'>choose</Button></div>
            <a className="right carousel-control slick-arrow" href="#" role="button" data-slide="next" aria-disabled="true">
            <span className="fa fa-angle-left" aria-hidden="true"></span>
            </a>


          </div>
*/
<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">to jeszcze ne dziala ale</h5>
        <p className="card-text">chce tu zrobic wybieranie polaczen</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

</div>
          );

}
}
