
import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";
import { CheckOutlined,CheckCircleOutlined  } from '@ant-design/icons';
import './Artur.css';
import {
  Input,
  Button,
  DatePicker,
  InputNumber,
  Card,
  Layout,
  Row, Col, Slider ,
} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Artur extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
  return (
      <div id="mainBoxB">
       <div id="mainBoxA">
       <div id="wrapper1">  <div className="row" >  <h2> Wybierz swoje miejsce </h2> </div> </div>
       <div className="row" >

           <div id="boxA"><div className="a"> <h2>1</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>2</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>3</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>4</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>5</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>6</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>7</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>8</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>9</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>10</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>11</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>12</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>13</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>14</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>15</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>16</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>17</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>18</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>19</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>20</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>21</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>22</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>

            </div>

                    <div className="row" style={{ height:'40px' }}>   </div>

            <div className="row" >


            <div id="boxA"><div className="a"> <h2>23</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>24</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>25</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>26</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>27</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>28</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>29</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>30</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>31</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>32</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>33</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>34</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>35</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>36</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>37</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>38</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>39</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>40</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>41</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>42</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>43</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>44</h2> </div> <Button type="primary" size="large" id="btnK2"><CheckOutlined /></Button></div>

                        </div>

            </div>
            <div id="mainBoxC">

             <form id="form111">
                     <label id="label11">
                       Wybrano Siedzenie Numer:

                        <input type="text" disabled/>
                     </label>
                     <input type="submit" id="btnOK1" value="OK" />
                   </form>

             </div>
             </div>
          );
}
}
