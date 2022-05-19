import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import '../styles/connections_style.css';
import {useNavigate} from "react-router";
import AuthService from "../services/auth-service";
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

class ChangeData extends Component {
  constructor(props) {
    super(props);

    this.state = {
         Navigate: null,
         userReady: false,
         currentUser: { username: "" }
    };
  }

  componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
 if (!currentUser) this.setState({ Navigate: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })

  }

  render() {
    if (this.state.Navigate) {
        return <Navigate to={this.state.Navigate} />
      }
 const { currentUser } = this.state;
  return (
  <div id="MainBoxSocial" >
  <div id="wrapper" >
  <div className="row">
     <div id="SocialK1"> <img id="img" src = { user } style = {{ borderRadius: '50%' }} /> </div>
  </div>
  <div className="row">
                       <Form id="formRadius" labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal"
                             initialValues={{size: '20'}}
                             onValuesChange='50'
                             size='50'>
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
                                     Change Password
                                   </Button>
                             </Form.Item>
                           </Form>
                        </div>
                    </div>
                </div>
          );

}
}

export default withRouter(ChangeData);