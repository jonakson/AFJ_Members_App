import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {CarOutlined, CreditCardOutlined, FileOutlined, PieChartOutlined, TeamOutlined,} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

const {Sider} = Layout;

const Sidebar = () => {
   const [collapsed, setCollapsed] = useState(false);

   return (
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
         <div className="logo"/>
         <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined/>}>
               <NavLink to="/">Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined/>}>
               <NavLink to="/members">Members</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<CreditCardOutlined/>}>
               <NavLink to="/payments">Payments</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<CarOutlined/>}>
               <NavLink to="/activities">Activities</NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<TeamOutlined/>}>
               <NavLink to="/memberships">Memberships</NavLink>
            </Menu.Item>
            <Menu.Item key="6" icon={<FileOutlined/>}>
               <NavLink to="/documents">Documents</NavLink>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default Sidebar;
