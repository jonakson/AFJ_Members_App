import {deleteMembership, getAllMemberships} from "../utils/client";
import {Button, Empty, Popconfirm, Space, Spin, Table} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {successNotification} from "../components/Notifications";
import AddMembershipModalForm from "../components/AddMembershipModalForm";

const removeMembership = (membership, callback) => {
   deleteMembership(membership.id)
      .then(() => {
         successNotification("Membership deleted", `${membership.name} was deleted from the system Database.`)
         callback();
      });
}

   const columns = fetchMemberships => [
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
      },
      {
         title: "Description",
         dataIndex: "description",
         key: "description",
      },
      {
         title: "Duration",
         dataIndex: "duration",
         key: "duration",
      },
      {
         title: "Price",
         dataIndex: "price",
         key: "price",
      },
      {
         title: "Actions",
         key: "actions",
         render: (text, membership) => (
            <>
               <Button type="primary" icon={<EyeOutlined/>}/>
               <Button icon={<EditOutlined/>}/>
               <Popconfirm
                  placement='topRight'
                  title={`Are you sure you want to delete ${membership.name}?`}
                  onConfirm={() => {
                     removeMembership(membership, fetchMemberships)
                  }}
                  okText='Yes'
                  cancelText='No'>
                  <Button type="primary" icon={<DeleteOutlined/>}/>
               </Popconfirm>
            </>
         )
      },
   ];


   const MembershipsView = () => {

      const [memberships, setMembership] = useState([]);
      const [fetching, setFetching] = useState(true);
      const [showMembershipModal, setShowMembershipModal] = useState(false);

      const AddMembershipButton = () => {
         return (
            <>
               <AddMembershipModalForm
                  showMembershipModal={showMembershipModal}
                  setShowMembershipModal={setShowMembershipModal}
                  fetchMemberships={fetchMemberships}
               />
               <Button
                  onClick={() => setShowMembershipModal(!showMembershipModal)}
                  type="primary"
                  shape="round"
                  icon={<PlusOutlined/>}
                  size="small"
               >
                  Add Membership
               </Button>
            </>

         );
      }
      
      const fetchMemberships = () => {
         getAllMemberships()
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               setMembership(data);
               setFetching(false);
            });
      };

      useEffect(() => {
         console.log("Component is mounted.");
         fetchMemberships();
      }, []);

      const renderMemberships = () => {
         if (fetching) {
            return (
               <Space size="middle">
                  <Spin size="large"/>
               </Space>
            );
         }
         if (memberships.length <= 0) {
            return (
               <>
                  <h2>Memberships</h2>
                  <AddMembershipButton/>
                  <Empty/>
               </>
            );
         }
         return (
            <>

               <h2>Members</h2>
               <Table
                  dataSource={memberships}
                  columns={columns(fetchMemberships)}
                  bordered
                  title={() => (
                     <AddMembershipButton/>
                  )}
                  pagination={{pageSize: 15}}
                  rowKey={(membership) => membership.id}
               />
            </>
         );
      };

      return (
         <>
            {renderMemberships()}
         </>
      )
   };

   export default MembershipsView;