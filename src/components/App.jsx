import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Form from "./form/Form";
import Table from "./table/Table";
import Edit from "./edit/Edit";

import "./css/main.css";
import "./css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/table" element={<Table />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
