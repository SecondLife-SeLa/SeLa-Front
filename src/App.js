import "./App.css";
import SelaHeader from "./components/SelaHeader";
import {} from "semantic-ui-react";
import MainPage from "./components/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Job from "./components/job";
import Management from "./components/JobPage/management";
import Finance from "./components/JobPage/finance";
import Coding from "./components/JobPage/coding";
import NoMatterduty from "./components/JobPage/noMatterDuty";
import NoMatterRegion from "./components/JobPage/noMatterRegion";
import Seoul from "./components/JobPage/seoul";
import Incheon from "./components/JobPage/incheon";
import Busan from "./components/JobPage/busan";
import NoMatterEdu from "./components/JobPage/noMatterEdu";
import Highschool from "./components/JobPage/highschool";
import Bachelor from "./components/JobPage/bachelor";
import Doctorate from "./components/JobPage/doctorate";
import OOcompany from "./components/CompanyInfo/OOcompany";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SelaHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/job" element={<Job />} />
          <Route path="/management" element={<Management />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/seoul" element={<Seoul />} />
          <Route path="/incheon" element={<Incheon />} />
          <Route path="/busan" element={<Busan />} />
          <Route path="/highschool" element={<Highschool />} />
          <Route path="/bachelor" element={<Bachelor />} />
          <Route path="/doctorate" element={<Doctorate />} />
          <Route path="/noMatterDuty" element={<NoMatterduty />} />
          <Route path="/noMatterRegion" element={<NoMatterRegion />} />
          <Route path="/noMatterEdu" element={<NoMatterEdu />} />
          <Route path="/OOcompany" element={<OOcompany />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
