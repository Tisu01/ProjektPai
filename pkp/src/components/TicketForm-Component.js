import React, { Component} from "react";
import './Home.css';
import {useNavigate} from "react-router";
import { RouteComponentProps, withRouter } from 'react-router-class-tools';
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
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleDate = this.handleDate.bind(this);

     this.state = {
     from: "",
     to: "",
     date: "",
     message: ""
     };
  }
    handleFrom(e) {
    this.setState({
      from: e.target.value
    });
  }
  handleTo(e) {
      this.setState({
        to: e.target.value
      });
    }

    handleDate(e) {
        this.setState({
          date: e.target.value
        });
      }

  viewSite(){

   this.props.navigate("/artur");
  }


  render() {
  return (

<div id="ticketBox">
<h2>Tutaj informacje o polaczeniu</h2>
<Form id="formRadius" labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal"
      initialValues={{size: '20'}}
      onValuesChange='50'
      size='50'>
      <Form.Item label="NAME" value={this.state.from} onChange={this.handleFrom}>
        <Input type='text' />
      </Form.Item>
      <Form.Item label="SURNAME" value={this.state.to} onChange={this.handleTo}>
        <Input type='text' />
       </Form.Item>

        <Form.Item label="ULGA" value={this.state.date} onChange={this.handleDate}>
        <select className="custom-select" id="inputGroupSelect01">
            <option value="0">0% biedaku</option>
            <option value="1">50% studencie</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
       </Form.Item>
        <Form.Item label="SITE" >
                   <Button type="primary" size="large" id="searchbtn"   onClick={ () => this.viewSite()} >
                     Choose

                    </Button>

         </Form.Item>


      <Form.Item>
      <br />
        <Button type="primary" size="large" id="searchbtn"   onClick={ () => this.viewConnection()} >
              Buy Ticket
            </Button>
      </Form.Item>



    </Form>

    <div style={{float: 'left'}}>fsdfshgfhgfhfghfghfghfghfghgfhfhfghfg</div>


</div>


    );
  }
}

export default withNavigation(TicketForm)