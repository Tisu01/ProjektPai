
import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth-service";

import Login from "./components/login-component";
import Register from "./components/register-component";
import Home from "./components/home-component";
import Profile from "./components/profile-component";
import BoardUser from "./components/board-user-component";
import BoardModerator from "./components/board-moderator-component";
import BoardAdmin from "./components/board-admin-component";
import Connections from "./components/connections-component";
import Artur from "./components/artur";
import TicketForm from "./components/TicketForm-Component";

//import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";


class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {

    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (

      <div  style={{backgroundImage:`url("https://www.aizul.xyz/img/background.jpg")`}}>

      <Router>

        <nav className="navbar navbar-expand navbar-dark bg-secondary">
          <Link to={"/"} className="navbar-brand">
            PAP
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
             <li className="nav-item">
              <Link to={"/ticketForm"} className="nav-link">
                  buy ticket
                 </Link>
               </li>
               <li className="nav-item">
                   <Link to={"/artur"} className="nav-link">
                        arturekXD
                        </Link>
                  </li>



            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Ticket
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>


        <div className="container mt-3" >
            <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/home"} element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/ticketForm" element={<TicketForm/>} />
            <Route exact path="/connections/:date/:from/:to"  element={<Connections />}  />
            <Route exact path="/artur" element={<Artur />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />}  />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            </Routes>
        </div>


        </Router>

        <footer style={{background: '#6c757d', marginTop: '2%', height: '82px'}}>
        <h2>Prace wykonali kiepy</h2>
        </footer>
      </div>

    );
  }
}

export default App;
