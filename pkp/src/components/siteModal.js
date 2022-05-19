
import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";
import { CheckOutlined,CheckCircleOutlined  } from '@ant-design/icons';
import '../styles/siteModal.css';
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

class Artur extends Component {
  constructor(props) {
    super(props);

    this.state = {
    number: null,
      content: ""
    };
  }

  takeNumber(numberSite){
        this.setState({
                number: numberSite
              });
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
      <div id="mainBoxB"  style={{marginTop: '10%'}} >
       <div id="mainBoxA">
       <div id="wrapper1">  <div className="row" style={{color: '#fff'}} >  <h2 > Wybierz swoje miejsce </h2> </div> </div>

       <div className="row" id="row11" >

           <div id="boxA"><div className="a"> <h2>1</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(1)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>2</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(2)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>3</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(3)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>4</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(4)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>5</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(5)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>6</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(6)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>7</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(7)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>8</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(8)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>9</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(9)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>10</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(10)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>11</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(11)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>12</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(12)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>13</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(13)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>14</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(14)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>15</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(15)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>16</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(16)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>17</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(17)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>18</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(18)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>19</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(19)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>20</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(20)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>21</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(21)}><CheckOutlined /></Button></div>
           <div id="boxA"><div className="a"> <h2>22</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(22)}><CheckOutlined /></Button></div>

            </div>


                    <div className="row" style={{ height:'40px' }}>   </div>

            <div className="row" id="row11" >


            <div id="boxA"><div className="a"> <h2>23</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(23)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>24</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(24)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>25</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(25)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>26</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(26)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>27</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(27)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>28</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(28)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>29</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(29)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>30</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(30)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>31</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(31)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>32</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(32)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>33</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(33)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>34</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(34)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>35</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(35)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>36</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(36)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>37</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(37)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>38</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(38)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>39</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(39)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>40</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(40)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>41</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(41)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>42</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(42)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>43</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(43)}><CheckOutlined /></Button></div>
            <div id="boxA"><div className="a"> <h2>44</h2> </div> <Button type="primary" size="large" id="btnK2" onClick={ () => this.takeNumber(44)}><CheckOutlined /></Button></div>

                        </div>

                <form id="form111">
                     <label id="label11" style={{color: '#fff'}}>
                       Wybrano Siedzenie Numer:
                        <input type="text" disabled value={this.state.number}  style={{color: '#fff'}}/>
                     </label>
                     <input type="submit" id="btnOK1" value={this.state.number}  onClick={this.props.handler} />
                   </form>

            </div>
             </div>
          );
}
}
export default Artur;