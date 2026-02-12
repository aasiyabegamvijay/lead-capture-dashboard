import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadForm from "./pages/LeadForm";
import LeadList from "./pages/LeadList";
import LeadDetail from "./pages/LeadDetail";
import { useState } from "react";


function App() {
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
      <div className={dark ? "dark" : ""}>
        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
        >
          {dark ? "Light" : "Dark"}
        </button>

        <Routes>
          <Route path="/" element={<LeadForm />} />
          <Route path="/leads" element={<LeadList />} />
          <Route path="/leads/:id" element={<LeadDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
