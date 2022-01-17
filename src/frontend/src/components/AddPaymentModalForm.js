import Modal from "antd/es/modal/Modal";
import {Button, DatePicker, Form, Select} from "antd";
import {successNotification} from "./Notifications";
import {Option} from "antd/es/mentions";
import {addNewPayment} from "../utils/client";

const AddPaymentModalForm = ({showPaymentModal, setShowPaymentModal, fetchPayments}) => {

   const handleOk = (payment) => {
      console.log(JSON.stringify(payment, null, 2));
      addNewPayment(payment)
         .then(() => {
            console.log("New Payment added.")
            successNotification("Payment added successfully", `Payment from MEMBER (MEMBERSHIP) was added to the system database.`)
            fetchPayments();
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setShowPaymentModal(false)
         })
   };

   const handleCancel = () => {
      setShowPaymentModal(false);
   };

   const dateFormat = 'DD/MM/YYYY';

   return (
      <Modal
         title="Add New Payment"
         visible={showPaymentModal}
         onCancel={handleCancel}
         footer={[
         ]}
      >
         <Form
            name="addNewPayment"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={handleOk}
         >
            <Form.Item>
               <Select
                  showSearch
                  placeholder="Search a Member to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                     optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
               >
                  <Option value="1">Juan José</Option>
                  <Option value="2">Jonatan</Option>
                  <Option value="3">Aixa</Option>
                  <Option value="4">Peña</Option>
                  <Option value="5">Alba</Option>
               </Select>
            </Form.Item>

            <Form.Item>
               <Select
                  showSearch
                  placeholder="Search a Membership to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                     optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
               >
                  <Option value="1">Sign-Up Membership</Option>
                  <Option value="2">Annual Membership</Option>
                  <Option value="3">Bi-Annual Membership</Option>
               </Select>
            </Form.Item>

            <Form.Item
               label="Date of Payment"
               name="registrationDate"
               rules={[{ required: true, message: 'Please input a date!' }]}
            >
               <DatePicker format={dateFormat} />
            </Form.Item>

            <Form.Item >
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
            </Form.Item>

         </Form>
      </Modal>
   );
};

export default AddPaymentModalForm;