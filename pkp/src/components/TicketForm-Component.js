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
    ticketData: [],
    listConnection: [],
    ticketConn: null,
    stationStarting: '',
    timeStarting: '',
    dataStarting: '',
    stationFinal: '',
    timeFinal: '',
    dataFinal: '',
    prize: '',
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
//    const ticketsData = JSON.stringify(TicketService.getTicketOne());
//
//    this.setState({ ticketData: ticketsData })
//      console.log('id => ' + JSON.stringify(this.state.ticketData));


     TicketService.getTicketOne().then(
      response => {
        this.setState({
          ticketData: response.data
        });
      },
      error => {
        this.setState({
          ticketData:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      },
      this.state.ticketData.map(
                    res => this.setState({ticketConn: res.connection}))
    );



    ConnectionService.getConnectionById(1).then(
            response => {
              this.setState({
                listConnection: response.data
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
                   <Button type="primary" size="large" id="searchbtn"  onClick={this.showSite}>
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
        <h2>miejsce: {this.state.site} {this.state.ticketConn}  </h2>
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