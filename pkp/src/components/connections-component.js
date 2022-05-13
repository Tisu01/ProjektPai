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
    title: 'Connection',
    from: 'Kielce',
    fromTime: '10:00',
    to: "Radom",
    toTime: "11:00",
    prize: "10.00",
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

<div className="row" id="rowID">
  <div className="col-sm-3" >
    <div className="card" id="cardBody" style={{width: '18rem'}}>
      <div className="card-body">
      <div className="row" id="rowMain">
      <div className="col-xs-6" id="innerBox" style={{margin: '0 auto'}}>
      <div className="Tiittle" style={{color: '#00a34f', margin: '0 auto'}}>From:</div>
      <div className="City"  style={{color: '#00a34f', margin: '0 auto'}}> {this.state.from}</div>
      <div className="Time" style={{color: '#00a34f', margin: '0 auto'}}>{this.state.fromTime}</div>
      <div className="Date" style={{color: '#00a34f', margin: '0 auto'}}>10.05.2022</div>
        </div>
      <div className="col-xs-6" id="innerBox" style={{margin: '0 auto'}}>
      <div className="Tiittle" style={{color: '#00a34f', margin: '0 auto'}}> To:</div>
            <div className="City" style={{color: '#00a34f', margin: '0 auto'}}> {this.state.to}</div>
            <div className="Time" style={{color: '#00a34f', margin: '0 auto'}}>{this.state.toTime}</div>
            <div className="Date" style={{color: '#00a34f', margin: '0 auto'}}>10.05.2022</div>
       </div>
      </div>
        <div>
        <div>
        <div id="price" style={{margin: '0 auto'}}>Prize:</div>
        <div id="price" style={{margin: '0 auto'}}>{this.state.prize} zł</div>
        </div>
         </div>
         <div id="btncho" style={{margin: '0 auto'}}><a href="#" className="btn btn-primary">Choose</a></div>


      </div>
    </div>
  </div>
</div>
          );

}
}