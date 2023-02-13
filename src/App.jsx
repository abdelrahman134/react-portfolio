import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/navbar";
import Banner from "./Component/banner";
import Skills from "./Component/skills";
import Projects from "./Component/project";
import Form from "./Component/form";
import Email from "./Component/email";
import Footer from "./Component/footer";
import Tab1 from "./Component/tab1";
import Tab2 from "./Component/tab2";
import Tab3 from "./Component/tab3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Skills />
      <Routes>
        <Route path="/" element={<Projects />}>
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<Tab2 />} />
          <Route path="tab3" element={<Tab3 />} />
        </Route>
      </Routes>

      <Form />
      <Email />
      <Footer />
    </Router>
  );
}
export default App;
