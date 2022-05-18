import React, { Component } from "react";
import { Navigate} from "react-router-dom";
//import AuthService from "../services/auth-service";
//import UserService from "../services/user-service";
//import SocialService from "../services/SocialService";
import './connections_style.css';
//import { useParams} from 'react-router-dom'
import {useNavigate} from "react-router";
import {  withRouter } from 'react-router-class-tools';
import user from '../images/user.jpg'

import {
  Input,
  Button,
  Form,
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
  <div id="MainBoxSocial" >
  <div className="row">
     <div id="SocialK1"> <img id="img" src = { user } style = {{ borderRadius: '50%' }} /> </div>
   <h2 >układ taki raczej </h2>
  </div>
  <div className="row">
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
                               <Form.Item label="E-MAIL" >
                               <Input type='text' />
                               </Form.Item>
                               <Form.Item label="OLD PASSWORD" >
                               <Input type='text' />
                              </Form.Item>
                               <Form.Item label="NEW PASSWORD" >
                                <Input type='text' />
                                </Form.Item>
                                <Form.Item label="REPEAT NEW PASSWORD" >
                                <Input type='text' />
                                </Form.Item>


                             <Form.Item>
                             <br />
                               <Button type="primary" size="large" id="searchbtn"   onClick={ () => this.viewConnection()} >
                                     Change My Data
                                   </Button>
                             </Form.Item>



                           </Form>
                        </div>


</div>
          );

}
}

export default withRouter(Social);