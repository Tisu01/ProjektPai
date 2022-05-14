import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";
import ConnectionService from "../services/ConnectionsService";
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
        //from: this.props.match.params.from,
        listConnections: []
    };
  }

  componentDidMount() {
    ConnectionService.getConnection().then(
      response => {
        this.setState({
          listConnections: response.data
        });
      },
      error => {
        this.setState({
          listConnections:
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
            {
             this.state.listConnections.map(
             connection =>
  <div className="col-sm-3" key = {connection.id}  style={{margin: '2%'}}>
    <div className="card" id="cardBody" style={{width: '18rem'}} >
      <div className="card-body">
      <div className="row" id="rowMain">
      <div className="col-xs-6" id="innerBox" style={{margin: '0 auto'}}>
      <div className="Tiittle" style={{color: '#00a34f', margin: '0 auto'}}>From:</div>
      <div className="City"  style={{color: '#00a34f', margin: '0 auto'}}> Kielce</div>
      <div className="Time" style={{color: '#00a34f', margin: '0 auto'}}>{connection.timeStarting}</div>
      <div className="Date" style={{color: '#00a34f', margin: '0 auto'}}>{connection.dataStarting}</div>
        </div>
      <div className="col-xs-6" id="innerBox" style={{margin: '0 auto'}}>
      <div className="Tiittle" style={{color: '#00a34f', margin: '0 auto'}}> To:</div>
            <div className="City" style={{color: '#00a34f', margin: '0 auto'}}> Radom</div>
            <div className="Time" style={{color: '#00a34f', margin: '0 auto'}}>{connection.timeFinal}</div>
            <div className="Date" style={{color: '#00a34f', margin: '0 auto'}}>{connection.dataFinal}</div>
       </div>
      </div>
        <div>
        <div>
        <div id="price" style={{margin: '0 auto'}}>Prize:</div>
        <div id="price" style={{margin: '0 auto'}}>{connection.prize} zł</div>
        </div>
         </div>
         <div id="btncho" style={{margin: '0 auto'}}><a href="#" className="btn btn-primary">Choose</a></div>


      </div>
    </div>
  </div>
  )}
</div>
          );

}
}