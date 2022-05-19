import React, { Component} from "react";
import './Home.css';
import {useNavigate} from "react-router";
import { RouteComponentProps, withRouter } from 'react-router-class-tools';
import Site from "./Site.js"
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
    super(props);
     this.state = {
    show: false,
    site: ''
     };
     this.showModal = this.showModal.bind(this);
     this.hideModal = this.hideModal.bind(this);
     this.handler = this.handler.bind(this)
  }
  handler() {
      this.setState({
        site: 'some value'
      })
    }

showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  viewSite(){
   //this.props.navigate("/artur");
  }


  render() {
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
        <Site show={this.state.show} handleClose={this.hideModal} handler = {this.handler}>
                  <p>Modal</p>
                </Site>
                   <Button type="primary" size="large" id="searchbtn"   onClick={this.showModal} >
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
        <h2>miejsce: {this.state.site}</h2>
      </Form.Item>


    </Form>


</div>

</div>

</div>


    );
  }
}

export default withNavigation(TicketForm)