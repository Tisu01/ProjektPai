import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";
import ConnectionService from "../services/ConnectionsService";
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

class Connections extends Component {
  constructor(props) {
    super(props);

    this.state = {
        date: this.props.match.params.date,
        from: this.props.match.params.from,
        to: this.props.match.params.to,
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
             this.state.listConnections.filter(conn => conn.dataStarting===this.state.date && conn.stationStarting===this.state.from && conn.stationFinal===this.state.to).map(
             connection =>
  <div className="col-sm-3" key = {connection.id}  style={{margin: '2%'}}>
    <div className="card" id="cardBody" style={{width: '18rem'}} >
      <div className="card-body">
      <div className="row" id="rowMain">
      <div className="col-xs-6" id="innerBox" style={{margin: '0 auto'}}>
      <div className="Tiittle" style={{color: '#00a34f', margin: '0 auto'}}>From:</div>
      <div className="City"  style={{color: '#00a34f', margin: '0 auto'}}> {connection.stationStarting}</div>
      <div className="Time" style={{color: '#00a34f', margin: '0 auto'}}>{connection.timeStarting}</div>
      <div className="Date" style={{color: '#00a34f', margin: '0 auto'}}>{connection.dataStarting}</div>
        </div>
      <div className="col-xs-6" id="innerBox" style={{margin: '0 auto'}}>
      <div className="Tiittle" style={{color: '#00a34f', margin: '0 auto'}}> To:</div>
            <div className="City" style={{color: '#00a34f', margin: '0 auto'}}> {connection.stationFinal}</div>
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

export default withRouter(Connections);