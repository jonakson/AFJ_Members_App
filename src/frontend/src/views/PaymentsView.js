import {Button, Empty, Space, Spin, Table} from "antd";
import {EditOutlined, EyeOutlined, PlusOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import AddPaymentModalForm from "../components/AddPaymentModalForm";
import {getAllPayments, getMemberById, getMembershipById} from "../utils/client";

const ShowMemberDocument = ({payment}) => {
   const [memberData, setMemberData] = useState(0);
   getMemberById(payment.paymentId.memberId)
      .then((res) => res.json())
      .then((data) => {
         setMemberData(data.idDocument)
      });
   return <> {memberData} </>
}

const ShowMemberName = ({payment}) => {
   const [memberData, setMemberData] = useState("");
   getMemberById(payment.paymentId.memberId)
      .then((res) => res.json())
      .then((data) => {
         setMemberData(data.name + " " + data.surname)
      });
   return <> {memberData} </>
}

const ShowMembershipName = ({payment}) => {
   const [membershipData, setMembershipData] = useState("");
   getMembershipById(payment.paymentId.membershipId)
      .then((res) => res.json())
      .then((data) => {
         setMembershipData(data.name)
      });
   return <> {membershipData} </>
}

const ShowMembershipAmnount = ({payment}) => {
   const [membershipData, setMembershipData] = useState("");
   getMembershipById(payment.paymentId.membershipId)
      .then((res) => res.json())
      .then((data) => {
         setMembershipData(data.price)
      });
   return <> {membershipData} </>
}


const columns = fetchPayments => [
   {
      title: "Document ID",
      key: "idDocument",
      render: (payment) => (
         <ShowMemberDocument payment={payment}/>
      )
   },
   {
      title: "Name & Surname",
      key: "name",
      render: (payment) => (
         <ShowMemberName payment={payment}/>
      )
   },
   {
      title: "Membership",
      key: "membershipName",
      render: (payment) => (
         <ShowMembershipName payment={payment}/>
      )
   },
   {
      title: "Amount",
      key: "priceMembership",
      render: (payment) => (
         <ShowMembershipAmnount payment={payment}/>
      )
   },
   {
      title: "Date",
      dataIndex: "paymentDate",
      key: "date",
   },
   {
      title: "Actions",
      key: "actions",
      render: (text, payment, member, membership) => (
         <>
            <Button type="primary" icon={<EyeOutlined/>}/>
            <Button icon={<EditOutlined/>}/>
            {/*            <Popconfirm
               placement='topRight'
               title={`Are you sure you want to delete ${activity.name}?`}
               onConfirm={() => {
                  removeActivity(activity, fetchActivities)
               }}
               okText='Yes'
               cancelText='No'>
               <Button type="primary" icon={<DeleteOutlined/>}/>
            </Popconfirm>*/}
         </>
      )
   },
];

const PaymentsView = () => {

   const [payments, setPayments] = useState([]);
   const [fetching, setFetching] = useState(true);
   const [showPaymentModal, setShowPaymentModal] = useState(false);

   const AddPaymentButton = () => {
      return (
         <>
            <AddPaymentModalForm
               showPaymentModal={showPaymentModal}
               setShowPaymentModal={setShowPaymentModal}
               fetchPayments={fetchPayments}
            />
            <Button
               onClick={() => setShowPaymentModal(!showPaymentModal)}
               type="primary"
               shape="round"
               icon={<PlusOutlined/>}
               size="small"
            >
               Add Payment
            </Button>
         </>

      );
   }

   const fetchPayments = () => {
      getAllPayments()
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPayments(data);
            setFetching(false);
         });
   };

   useEffect(() => {
      console.log("Component PaymentsView is mounted.");
      fetchPayments();
   }, []);

   const renderPayments = () => {
      if (fetching) {
         return (
            <Space size="middle">
               <Spin size="large"/>
            </Space>
         );
      }
      if (payments.length <= 0) {
         return (
            <>
               <h2>Payments</h2>
               <AddPaymentButton/>
               <Empty/>
            </>
         );
      }
      return (
         <>

            <h2>Payments</h2>
            <Table
               dataSource={payments}
               columns={columns(fetchPayments)}
               bordered
               title={() => (
                  <AddPaymentButton/>
               )}
               pagination={{pageSize: 15}}
               rowKey={(payment) => payment.paymentId}
            />
         </>
      );
   };

   return (
      <>
         {renderPayments()}
      </>
   )

}

export default PaymentsView;