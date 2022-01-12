import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {CarOutlined, CreditCardOutlined, FileOutlined, PieChartOutlined, TeamOutlined,} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Sider} = Layout;

const Sidebar = () => {
   const [collapsed, setCollapsed] = useState(false);

   return (
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
         <div className="logo"/>
         <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined/>}>
               <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined/>}>
               <Link to="/members">Members</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CreditCardOutlined/>}>
               <Link to="/payments">Payments</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<CarOutlined/>}>
               <Link to="/activities">Activities</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined/>}>
               <Link to="/documents">Documents</Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default Sidebar;
