import "./App.css";
import {} from "semantic-ui-react";
import Login from "./components/Login";
import SelaHeader from "./components/SelaHeader";
import {} from "semantic-ui-react";
import MainPage from "./components/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Job from "./components/job";
import Management from "./components/management";
import Register from "./components/register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SelaHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/job" element={<Job />} />
          <Route path="/management" element={<Management />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
