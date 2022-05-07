import './Home.css';
import { Layout, Menu,Input,Row, Col,DatePicker,Button,Tooltip} from 'antd';
import { RightOutlined,SearchOutlined  } from '@ant-design/icons';
import {Link} from "react-router-dom";
const { Header, Content } = Layout;


export function Home() {
return (
  <Layout>

      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Link to="/">
            <Menu.Item key="1">Główna Strona</Menu.Item>
        </Link>
        <Link to="Login">
                    <Menu.Item key="1">Logowanie</Menu.Item>
        </Link>
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
<Row> <Col span={24}><h2 align="center">Rozkład jazdy i bilety </h2></Col> </Row>
<Row> <Col span={24}>  </Col> </Row>

               <Row justify="space-around" align="center">

                     <Col span={6}>
                               <Input size="large" placeholder="z" prefix={<RightOutlined />} />
                     </Col>
                           <Col span={1}> </Col>
                     <Col span={6}>
                               <Input size="large" placeholder="do" prefix={<RightOutlined />} />
                     </Col>
                           <Col span={1}> </Col>
                     <Col span={6}>
                               <DatePicker style={{ width: '90%' }} />
                     </Col>
                     <Col span={1}>
                            <Tooltip title="search">
                                <Button shape="circle" icon={<SearchOutlined />} size="large" />
                            </Tooltip>
                       < /Col>
                   </Row>

          </Content>
        </Layout>
      </Layout>

 );
}

export default Home;