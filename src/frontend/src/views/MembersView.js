import {deleteMember, getAllMembers} from "../utils/client";
import {Badge, Button, Empty, Popconfirm, Space, Spin, Table, Tag} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined, UserOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import AddMemberModalForm from "../components/AddMemberModalForm";
import Avatar from "antd/es/avatar/avatar";
import {successNotification} from "../components/Notifications";

const removeMember = (member, callback) => {
   deleteMember(member.id)
      .then(() => {
         successNotification("Member deleted", `${member.name} ${member.surname} (${member.idDocument}) was deleted from the system Database.`)
         callback();
      });
}

const ShowMembershipRemainingDays = ({member}) => {
   let days = Math.trunc((Date.now() - (new Date(member.entryDate)).getTime()) / (1000 * 3600 * 24));
   if (days === 0) {
      return <Tag color="blue">{days} Days</Tag>
   } else if (days === 1) {
      return <Tag color="green">{days} Day</Tag>
   } else if (days > 1) {
      return <Tag color="green">{days} Days</Tag>
   } else if (days === -1) {
      return <Tag color="red">{days} Day</Tag>
   } else if (days < -1) {
      return <Tag color="red">{days} Days</Tag>
   }
}

   const columns = fetchMembers => [
      {
         title: "ID Document",
         dataIndex: "idDocument",
         key: "idDocument",
      },
      {
         title: "Name & Surname",
         key: "name",
         render: (text, member) => (
            `${member.name} ${member.surname}`
         )
      },
      {
         title: "Phone",
         dataIndex: "phone",
         key: "phone",
      },
      {
         title: "Entry date",
         dataIndex: "entryDate",
         key: "entryDate",
      },
      {
         title: "Next Payment",
         key: "entryDate",
         render: (text, member) => (
            <ShowMembershipRemainingDays
               member={member}
            />
         )
      },
      {
         title: "Actions",
         key: "actions",
         render: (text, member) => (
            <>
               <Button type="primary" icon={<EyeOutlined/>}/>
               <Button icon={<EditOutlined/>}/>
               <Popconfirm
                  placement='topRight'
                  title={`Are you sure you want to delete ${member.name} ${member.surname}?`}
                  onConfirm={() => {
                     removeMember(member, fetchMembers)
                  }}
                  okText='Yes'
                  cancelText='No'>
                  <Button type="primary" icon={<DeleteOutlined/>}/>
               </Popconfirm>
            </>
         )
      },
   ];


   const MembersView = () => {

      const [members, setMembers] = useState([]);
      const [fetching, setFetching] = useState(true);
      const [showMemberModal, setShowMemberModal] = useState(false);

      const AddMemberButton = () => {
         return (
            <>
               <AddMemberModalForm
                  showMemberModal={showMemberModal}
                  setShowMemberModal={setShowMemberModal}
                  fetchMembers={fetchMembers}
               />
               <Badge
                  count={members.length}
               >
                  <Avatar shape="square" icon={<UserOutlined/>}/>
               </Badge>
               <Button
                  onClick={() => setShowMemberModal(!showMemberModal)}
                  type="primary"
                  shape="round"
                  icon={<PlusOutlined/>}
                  size="small"
                  style={{marginLeft: "25px"}}
               >
                  Add Member
               </Button>
            </>

         );
      }
      
      const fetchMembers = () => {
         getAllMembers()
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               setMembers(data);
               setFetching(false);
            });
      };

      useEffect(() => {
         console.log("Component is mounted.");
         fetchMembers();
      }, []);

      const renderMembers = () => {
         if (fetching) {
            return (
               <Space size="middle">
                  <Spin size="large"/>
               </Space>
            );
         }
         if (members.length <= 0) {
            return (
               <>
                  <h2>Members</h2>
                  <AddMemberButton/>
                  <Empty/>
               </>
            );
         }
         return (
            <>

               <h2>Members</h2>
               <Table
                  dataSource={members}
                  columns={columns(fetchMembers)}
                  bordered
                  title={() => (
                     <AddMemberButton/>
                  )}
                  pagination={{pageSize: 15}}
                  rowKey={(member) => member.id}
               />
            </>
         );
      };

      return (
         <>
            {renderMembers()}
         </>
      )
   };

   export default MembersView;