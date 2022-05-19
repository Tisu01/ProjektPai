import React, { Component } from "react";
import { isEmail } from "validator";
import '../styles/Register.css';
import {Layout} from 'antd';
import {Link} from "react-router-dom";
import AuthService from "../services/auth-service";
import {useNavigate} from "react-router";
import { RouteComponentProps, withRouter } from 'react-router-class-tools';
const {  Content } = Layout;
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export const  withNavigation = (Component : Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      clickButton: false,
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
      clickButton: true
    }, () => {

    //this.form.validateAll();

    if (this.state.clickButton === true) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
      () => {
                this.props.navigate('/login');
                window.location.reload('/');
              },
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },

        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
    });
  }

  render() {
    return (

                <div id="MainBoxRegister">
                <div id="wrapper">
             <div className="text-center m-5-auto">
                  <h2>Join us</h2>
                  <h5>Create your personal account</h5>
                  <form
                  onSubmit={this.handleRegister}
                              ref={c => {
                                this.form = c;
                              }}>

                      <p>
                          <label>Username</label><br/>
                          <input type="text"
                                                     className="form-control"
                                                     name="username"
                                                     value={this.state.username}
                                                     onChange={this.onChangeUsername}
                                                     validations={[required, vusername]} />
                      </p>
                      <p>
                          <label>Email address</label><br/>
                          <input type="text"
                                                     className="form-control"
                                                     name="email"
                                                     value={this.state.email}
                                                     onChange={this.onChangeEmail}
                                                     validations={[required, email]} />
                      </p>
                      <p>
                          <label>Password</label><br/>
                          <input  type="password"
                                                     className="form-control"
                                                     name="password"
                                                     value={this.state.password}
                                                     onChange={this.onChangePassword}
                                                     validations={[required, vpassword]} />
                      </p>
                      <p>
                          <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                      </p>
                      <p>
                          <button id="sub_btn" type="submit">Register</button>
                      </p>

                      {this.state.message && (
                                    <div className="form-group">
                                      <div
                                        className={
                                          this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                        }
                                        role="alert"
                                      >
                                        {this.state.message}
                                      </div>
                                    </div>
                                  )}



                  </form>
                  <footer>
                      <p><Link to="/">Back to Homepage</Link>.</p>
                  </footer>
              </div>
              </div>

</div>
    );
  }
}

export default withNavigation(Register);