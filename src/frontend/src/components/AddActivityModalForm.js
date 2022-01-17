import Modal from "antd/es/modal/Modal";
import {Button, DatePicker, Form, Input, InputNumber} from "antd";
import {addNewActivity} from "../utils/client";
import {successNotification} from "./Notifications";
import TextArea from "antd/es/input/TextArea";

const AddActivityModalForm = ({showActivityModal, setShowActivityModal, fetchActivities}) => {

   const handleOk = (activity) => {
      console.log(JSON.stringify(activity, null, 2));
      addNewActivity(activity)
         .then(() => {
            console.log("New Activity added.")
            successNotification("Activity added successfully", `${activity.name} (${activity.date}) was added to the system database.`)
            fetchActivities();
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setShowActivityModal(false)
         })
   };

   const handleCancel = () => {
      setShowActivityModal(false);
   };

   const dateFormat = 'DD/MM/YYYY';

   return (
      <Modal
         title="Add New Activity"
         visible={showActivityModal}
         onCancel={handleCancel}
         footer={[
         ]}
      >
         <Form
            name="addNewActivity"
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
               label="Date"
               name="date"
               rules={[{ required: true, message: 'Please input a date!' }]}
            >
               <DatePicker format={dateFormat} />
            </Form.Item>

            <Form.Item
               label="Capacity"
               name="capacity"
               rules={[{ required: true, message: 'Please input a capacity!' }]}
            >
               <InputNumber addonAfter="People" style={{ width: '100%' }}/>
            </Form.Item>

            <Form.Item
               label="Place"
               name="place"
               rules={[{ required: true, message: 'Please input a place!' }]}
            >
               <Input />
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

export default AddActivityModalForm;