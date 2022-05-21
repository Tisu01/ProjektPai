import React, { Component} from "react";
import '../styles/Home.css';
import {useNavigate} from "react-router";
import { RouteComponentProps, withRouter } from 'react-router-class-tools';
import Site from "./Site.js"
import Payment from "./Payment.js"
import SiteModal from "./siteModal"
import TicketService from "../services/ticketService";
import ConnectionService from "../services/ConnectionsService";
import AuthService from "../services/auth-service";
import {
  Layout,
  Form,
  Input,
  Button,
  Select,
} from 'antd';


export const  withNavigation = (Component : Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class TicketForm extends Component {
  constructor(props) {
    super();
     this.state = {
    show: false,
    site: 2,
    showSite: false,
    listConnection: [],
    stationStarting: '',
    timeStarting: '',
    dataStarting: '',
    stationFinal: '',
    timeFinal: '',
    dataFinal: '',
    prize: null,
    train: '',
     };

     this.showModal = this.showModal.bind(this);
     this.hideModal = this.hideModal.bind(this);

  }

  showSite = () => {
  this.setState({ showSite: true });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });

  };



 componentDidMount() {
   const ticketsDataConn = JSON.stringify(TicketService.getCurrentTicketConn());


    ConnectionService.getConnectionById(ticketsDataConn).then(

            response => {
            let connection = response.data;
              this.setState({
                stationStarting: connection.stationStarting,
                stationFinal: connection.stationFinal,
                dataStarting: connection.dataStarting,
                dataFinal: connection.dataFinal,
                timeStarting: connection.timeStarting,
                timeFinal: connection.timeFinal,
                prize: connection.prize,
                train: connection.train
              });
            },
            error => {
              this.setState({
                listConnection:
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString()
              });
            }
          );


 }


  render() {

const { showSite } = this.state;

  return (
<div className="MainBoxTicket" >

<div id="ticketBox">


<div id="wrapper2">
<h2>Tutaj informacje o polaczeniu</h2>
<div>

 <div className="row" id="rowMain">
      <div className="col-xs-6" id="innerBox" style={{margin: '2%'}}>

      <div className="City"  style={{color: '#00a34f', margin: '0 auto' , fontSize: '24px'}}> {this.state.stationStarting}</div>
      <div className="Time" style={{color: '#00a34f', margin: '0 auto', fontSize: '24px'}}>{this.state.timeStarting}</div>
      <div className="Date" style={{color: '#00a34f', margin: '0 auto'}}>{this.state.dataStarting}</div>
        </div>
         <div className="col-xs-6" id="innerBox" style={{margin: '2%'}}>
         <br/>
         <h2> ----> </h2>
         </div>
      <div className="col-xs-6" id="innerBox" style={{margin: '2%'}}>

            <div className="City" style={{color: '#00a34f', margin: '0 auto', fontSize: '24px'}}> {this.state.stationFinal}</div>
            <div className="Time" style={{color: '#00a34f', margin: '0 auto', fontSize: '24px'}}>{this.state.timeFinal}</div>
            <div className="Date" style={{color: '#00a34f', margin: '0 auto'}}>{this.state.dataFinal}</div>
       </div>
      </div>

</div>


<Form id="formRadius" labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal"
      initialValues={{size: '20'}}
      onValuesChange='50'
      size='50'>
      <Form.Item label="NAME" >
        <Input type='text' />
      </Form.Item>
      <Form.Item label="SURNAME" >
        <Input type='text' />

       </Form.Item>

        <Form.Item label="ULGA"  >
        <select className="custom-select" id="inputGroupSelect01">
            <option value="0">0% biedaku</option>
            <option value="1">50% studencie</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
       </Form.Item>
        <Form.Item label="SITE" >
        <Site show={this.state.show} handleClose={this.hideModal}>
                  <p>Modal</p>
                </Site>
                   <Button type="primary" size="large" id="searchbtn"  onClick={this.showModal}>
                     Choose
                    </Button>
         </Form.Item>
      <Form.Item>
      <br />
        <Button type="primary" size="large" id="searchbtn"   onClick={ () => this.viewConnection()} >
              Buy Ticket
            </Button>
      </Form.Item>
     <Form.Item>
        <h2>Site: {TicketService.getItemSite()} </h2>
        <h2>Prize: {this.state.prize} </h2>
      </Form.Item>

    </Form>

</div>
</div>


</div>
    );
  }
}

export default withNavigation(TicketForm)

//{showSite && (
//                  <SiteModal></SiteModal>
//                )}