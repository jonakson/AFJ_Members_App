import {Button, Empty, Popconfirm, Space, Spin, Table} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {successNotification} from "../components/Notifications";
import {deleteActivity, getAllActivities} from "../utils/client";
import AddActivityModalForm from "../components/AddActivityModalForm";

const removeActivity = (activity, callback) => {
   deleteActivity(activity.id)
      .then(() => {
         successNotification("Activity deleted", `${activity.name} (${activity.date}) was deleted from the system Database.`)
         callback();
      });
}




const columns = fetchActivities => [
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
      title: "Date",
      dataIndex: "date",
      key: "date",
   },
   {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
   },
   {
      title: "Place",
      dataIndex: "place",
      key: "place",
   },
   {
      title: "Price",
      dataIndex: "price",
      key: "price",
   },
   {
      title: "Actions",
      key: "actions",
      render: (activity) => (
         <>
            <Button type="primary" icon={<EyeOutlined/>}/>
            <Button icon={<EditOutlined/>}/>
            <Popconfirm
               placement='topRight'
               title={`Are you sure you want to delete ${activity.name}?`}
               onConfirm={() => {
                  removeActivity(activity, fetchActivities)
               }}
               okText='Yes'
               cancelText='No'>
               <Button type="primary" icon={<DeleteOutlined/>}/>
            </Popconfirm>
         </>
      )
   },
];

const ActivitiesView = () => {

   const [activities, setActivities] = useState([]);
   const [fetching, setFetching] = useState(true);
   const [showActivityModal, setShowActivityModal] = useState(false);

   const AddActivityButton = () => {
      return (
         <>
            <AddActivityModalForm
               showActivityModal={showActivityModal}
               setShowActivityModal={setShowActivityModal}
               fetchActivities={fetchActivities}
            />
            <Button
               onClick={() => setShowActivityModal(!showActivityModal)}
               type="primary"
               shape="round"
               icon={<PlusOutlined/>}
               size="small"
            >
               Add Activity
            </Button>
         </>

      );
   }

   const fetchActivities = () => {
      getAllActivities()
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setActivities(data);
            setFetching(false);
         });
   };

   useEffect(() => {
      console.log("Component ActivitiesView is mounted.");
      fetchActivities();
   }, []);

   const renderActivities = () => {
      if (fetching) {
         return (
            <Space size="middle">
               <Spin size="large"/>
            </Space>
         );
      }
      if (activities.length <= 0) {
         return (
            <>
               <h2>Activities</h2>
               <AddActivityButton/>
               <Empty/>
            </>
         );
      }
      return (
         <>

            <h2>Activities</h2>
            <Table
               dataSource={activities}
               columns={columns(fetchActivities)}
               bordered
               title={() => (
                  <AddActivityButton/>
               )}
               pagination={{pageSize: 15}}
               rowKey={(activity) => activity.id}
            />
         </>
      );
   };

   return (
      <>
         {renderActivities()}
      </>
   )
}

export default ActivitiesView;