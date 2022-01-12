import "./assets/App.css";
import {Layout} from "antd";
import Sidebar from "./views/Sidebar";
import MembersView from "./views/MembersView";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DashboardView from "./views/DashboardView";
import PaymentsView from "./views/PaymentsView";
import ActivitiesView from "./views/ActivitiesView";
import DocumentsView from "./views/DocumentsView";
import MembershipsView from "./views/MembershipsView";

const {Header, Content, Footer} = Layout;

function App() {

   return (
      <Router>
         <Layout style={{minHeight: "100vh"}}>
            <Sidebar/>
            <Layout className="site-layout">
               <Header
                  className="site-layout-background"
                  style={{padding: 0, textAlign: "center"}}>
                  <h2>Asociación Faro de Jandía - Members Management System</h2>
               </Header>
               <Content style={{margin: "0 16px"}}>
                  <br/>
                  <div
                     className="site-layout-background"
                     style={{padding: 24, minHeight: 360}}
                  >
                     <Routes>
                        <Route  path="/" element={<DashboardView/>} />
                        <Route  path="/members" element={<MembersView/>} />
                        <Route  path="/payments" element={<PaymentsView/>} />
                        <Route  path="/activities" element={<ActivitiesView/>} />
                        <Route  path="/memberships" element={<MembershipsView/>} />
                        <Route  path="/documents" element={<DocumentsView/>} />
                     </Routes>
                  </div>

               </Content>
               <Footer style={{textAlign: "center"}}>
                  Jonatan Calzado Diaz ©2022
               </Footer>
            </Layout>
         </Layout>
      </Router>

   );
}

export default App;
