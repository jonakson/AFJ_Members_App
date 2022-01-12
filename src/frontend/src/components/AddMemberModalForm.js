import Modal from "antd/es/modal/Modal";
import {Button, DatePicker, Form, Input, InputNumber} from "antd";
import {addNewMember} from "../utils/client";
import {successNotification} from "./Notifications";

const AddMemberModalForm = ({showMemberModal, setShowMemberModal, fetchMembers}) => {

   const handleOk = (member) => {
      console.log(JSON.stringify(member, null, 2));
      addNewMember(member)
         .then(() => {
            console.log("New Member added.")
            successNotification("Member added successfully", `${member.name} ${member.surname} was added to the system database.`)
            fetchMembers();
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setShowMemberModal(false)
         })
   };

   const handleCancel = () => {
      setShowMemberModal(false);
   };

   const dateFormat = 'DD/MM/YYYY';


   return (
      <Modal
         title="Add New Member"
         visible={showMemberModal}
         onCancel={handleCancel}
         footer={[
         ]}
      >
         <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={handleOk}
         >
            <Form.Item
               label="Name"
               name="name"
               rules={[{ required: true, message: 'Please input your name!' }]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="Surname"
               name="surname"
               rules={[{ required: true, message: 'Please input your surname!' }]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="ID / Passport"
               name="idDocument"
               rules={[{ required: true, message: 'Please input your ID/Passport number!' }]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               name="email"
               label="E-mail"
               rules=
                  {[{type: 'email', message: 'The input is not valid E-mail!'},
                  {required: true, message: 'Please input your E-mail!'}
               ]}
            >
               <Input />
            </Form.Item>

            {/*<Form.Item
               label="Password"
               name="password"
               rules={[{ required: true, message: 'Please input your password!' }]}
            >
               <Input.Password />
            </Form.Item>*/}

            <Form.Item
               label="Phone number"
               name="phone"
               rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
               <InputNumber style={{ width: '100%' }}/>
            </Form.Item>

            <Form.Item
               label="Date of Birth"
               name="dob"
               rules={[{ required: true, message: 'Please input your date of birth!' }]}
            >
               <DatePicker format={dateFormat} />
            </Form.Item>

            <Form.Item
               label="Entry Date"
               name="entryDate"
               rules={[{ required: true, message: 'Please input the entry date!' }]}
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

export default AddMemberModalForm;