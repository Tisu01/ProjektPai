import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { Layout, Menu,Input,Row, Col,DatePicker,Button,Tooltip} from 'antd';
import { RightOutlined,SearchOutlined  } from '@ant-design/icons';
import {Link} from "react-router-dom";


import "./styles.css";
const { Header, Content } = Layout;
export function Login() {

     const [errorMessages, setErrorMessages] = useState({});
     const [isSubmitted, setIsSubmitted] = useState(false);

     const database = [
         {
           username: "user1",
           password: "pass1"
         },
         {
           username: "user2",
           password: "pass2"
         }
       ];

       const errors = {
         uname: "invalid username",
         pass: "invalid password"
       };

       const handleSubmit = (event) => {
         //Prevent page reload
         event.preventDefault();

         var { uname, pass } = document.forms[0];

         // Find user login info
         const userData = database.find((user) => user.username === uname.value);

         // Compare user info
         if (userData) {
           if (userData.password !== pass.value) {
             // Invalid password
             setErrorMessages({ name: "pass", message: errors.pass });
           } else {
             setIsSubmitted(true);
           }
         } else {
           // Username not found
           setErrorMessages({ name: "uname", message: errors.uname });
         }
       };

       // Generate JSX code for error message
       const renderErrorMessage = (name) =>
         name === errorMessages.name && (
           <div className="error">{errorMessages.message}</div>
         );

       // JSX code for login form
       const renderForm = (
         <div className="form">
           <form onSubmit={handleSubmit}>
             <div className="input-container">
               <label>Username </label>
               <input type="text" name="uname" required />
               {renderErrorMessage("uname")}
             </div>
             <div className="input-container">
               <label>Password </label>
               <input type="password" name="pass" required />
               {renderErrorMessage("pass")}
             </div>
             <div className="button-container">
               <input type="submit" />
             </div>
           </form>
         </div>
       );
  return (
    <Layout>

        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Link to="/">
              <Menu.Item key="1">Główna Strona</Menu.Item>
          </Link>

                      <Menu.Item key="1">Logowanie</Menu.Item>

          </Menu>
        </Header>

         <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
     <div className="login">
       <div className="login-form">
         <div className="title">Sign In</div>
         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
       </div>
     </div>
            </Content>
          </Layout>
        </Layout>

  );
}

export default Login;