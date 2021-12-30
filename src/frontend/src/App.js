import './App.css';
import React, {useEffect, useState} from "react";
import {getAllMembers} from "./client";
import {Breadcrumb, Empty, Layout, Menu, Space, Spin, Table} from 'antd';
import {
    CarOutlined,
    CreditCardOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const columns = [
    {
        title: 'DNI',
        dataIndex: 'idDocument',
        key: 'idDocument',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'DOB',
        dataIndex: 'dob',
        key: 'dob',
    },
    {
        title: 'Entry date',
        dataIndex: 'entryDate',
        key: 'entryDate',
    }
];

function App() {

    const [members, setMembers] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [fetching, setFetching] = useState(true);

    const fetchMembers = () => {
        getAllMembers()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMembers(data);
                setFetching(false);
            })
    }

    useEffect(() => {
        console.log("Component is mounted.");
        fetchMembers();
    }, []);

    const renderMembers = () => {
        if (fetching) {
            return  <Space size="middle">
                        <Spin size="large" />
                    </Space>
        }
        if (members.length <= 0) {
            return <Empty />
        }
        return <Table
            dataSource={members}
            columns={columns}
            bordered
            pagination={{ pageSize: 15 }}
            rowKey={(member) => member.id}
        />;
    }

    return <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Dashboard
                </Menu.Item>
                <SubMenu key="sub1" icon={<TeamOutlined />} title="Members">
                    <Menu.Item key="2">List members</Menu.Item>
                    <Menu.Item key="3">Add new member</Menu.Item>
                    <Menu.Item key="4">Print members</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<CreditCardOutlined />} title="Payments">
                    <Menu.Item key="5">List Payments</Menu.Item>
                    <Menu.Item key="6">Add payment</Menu.Item>
                    <Menu.Item key="7">Print payments</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<CarOutlined />} title="Activities">
                    <Menu.Item key="8">List activities</Menu.Item>
                    <Menu.Item key="9">Add activity</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<UserOutlined />} title="Profile">
                    <Menu.Item key="10">Profile info</Menu.Item>
                    <Menu.Item key="11">Manage profile</Menu.Item>
                </SubMenu>
                <Menu.Item key="12" icon={<FileOutlined />}>
                    Documents
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
                <h2>Asociación Faro de Jandía - Members Management System</h2>
            </Header>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {renderMembers()}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Jonatan Calzado Diaz ©2022</Footer>
        </Layout>
    </Layout>

}

export default App;
