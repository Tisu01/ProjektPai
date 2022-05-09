import './Forgetpassword.css';
import { Layout} from 'antd';
//import { RightOutlined,SearchOutlined  } from '@ant-design/icons';
import {Link} from "react-router-dom";
const {  Content } = Layout;


export function ForgetPassword() {
return (

       <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          <div id="wrapper">
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
          </Content>
        </Layout>


 );
}

export default ForgetPassword;