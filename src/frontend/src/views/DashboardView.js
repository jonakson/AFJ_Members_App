import {Card, Col, Row, Statistic} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";

const DashboardView = () => {

   return (
      <div className="site-statistic-demo-card">
         <Row gutter={16}>
            <Col span={12}>
               <Card>
                  <Statistic
                     title="New Members - 7 Days"
                     value={11.28}
                     precision={2}
                     valueStyle={{ color: '#3f8600' }}
                     prefix={<ArrowUpOutlined />}
                     suffix="%"
                  />
               </Card>
            </Col>
            <Col span={12}>
               <Card>
                  <Statistic
                     title="New Members - 28 Days"
                     value={9.3}
                     precision={2}
                     valueStyle={{ color: '#cf1322' }}
                     prefix={<ArrowDownOutlined />}
                     suffix="%"
                  />
               </Card>
            </Col>
         </Row>
      </div>
   )
}

export default DashboardView;