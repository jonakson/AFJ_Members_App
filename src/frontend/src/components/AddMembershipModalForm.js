import Modal from "antd/es/modal/Modal";
import {Button, Form, Input, InputNumber} from "antd";
import {addNewMembership} from "../utils/client";
import {successNotification} from "./Notifications";
import TextArea from "antd/es/input/TextArea";

const AddMembershipModalForm = ({showMembershipModal, setShowMembershipModal, fetchMemberships}) => {

   const handleOk = (membership) => {
      console.log(JSON.stringify(membership, null, 2));
      addNewMembership(membership)
         .then(() => {
            console.log("New Membership added.")
            successNotification("Membership added successfully", `${membership.name} was added to the system database.`)
            fetchMemberships();
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setShowMembershipModal(false)
         })
   };

   const handleCancel = () => {
      setShowMembershipModal(false);
   };

   return (
      <Modal
         title="Add New Membership"
         visible={showMembershipModal}
         onCancel={handleCancel}
         footer={[
         ]}
      >
         <Form
            name="addNewMembership"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={handleOk}
         >
            <Form.Item
               label="Name"
               name="name"
               rules={[{ required: true, message: 'Please input a name!' }]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="Description"
               name="description"
               rules={[{ required: true, message: 'Please input a description!' }]}
            >
               <TextArea rows={3} />
            </Form.Item>

            <Form.Item
               label="Duration"
               name="duration"
               rules={[{ required: true, message: 'Please input a duration!' }]}
            >
               <InputNumber addonAfter="Days" style={{ width: '100%' }}/>
            </Form.Item>

            <Form.Item
               label="Price"
               name="price"
               rules={[{ required: true, message: 'Please input a price!' }]}
            >
               <Input addonAfter="€"/>
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

export default AddMembershipModalForm;