import React, { Component} from "react";
import './Home.css';
import { RightOutlined,SearchOutlined  } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import { useParams} from 'react-router-dom'
import { RouteComponentProps, withRouter } from 'react-router-class-tools';
import {
  Layout,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Space,
  Tooltip,
} from 'antd';
import UserService from "../services/user-service";
const { Header, Content } = Layout;


export const  withNavigation = (Component : Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
}
//render={(props) => ( <Connections from={props.match.params.from}/>)}


class Home extends Component {
  constructor(props) {
    super(props);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleDate = this.handleDate.bind(this);

     this.state = {
     from: "",
     to: "",
     date: ""
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

  viewConnection(){
  //this.props.navigate('/connections',this.state.from);
   this.props.navigate(`/connections/${this.state.from}`);
  }


  render() {
  return (

<div id="mainBox">
      <Form id="formRadius" labelCol={{span: 4,}} wrapperCol={{span: 14,}} layout="horizontal"
      initialValues={{size: '20'}}
      onValuesChange='50'
      size='50'

    >

      <Form.Item label="FROM" value={this.state.from} onChange={this.handleFrom}>
        <Input type='text' />
      </Form.Item>
      <Form.Item label="TO:" value={this.state.to} onChange={this.handleTo}>
        <Input type='text' />
       </Form.Item>

<Form.Item label="DATE:" value={this.state.date} onChange={this.handleDate}>
        <Input type='date' />
       </Form.Item>


        <br />
      <Form.Item>
        <Button type="primary" size="large" id="searchbtn"   onClick={ () => this.viewConnection()} >
              Search
            </Button>

      </Form.Item>
    </Form>

        <div id="box1" >
            <h2>tutaj trzeba zrobic jakies informacje łądnie</h2>
        </div>

</div>


    );
  }
}

export default withNavigation(Home);