import { AppProvider } from "@channel.io/bezier-react";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";
import PickDate from "./pages/PickDate";
import SetTime from "./pages/SetTime";
import InputField from "./pages/InputField";
import Check from "./pages/Check";
import { useEffect } from "react";

// import { isMobile } from './utils/userAgent'

function Initializer() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/appointment-create");
  }, []);
}

function App() {
  return (
    <AppProvider>
      {/* <div style={{ padding: isMobile() ? '16px' : '0 24px 24px 24px' }}> */}
      <div style={{ padding: "0 24px 24px 24px" }}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Initializer />} />
            <Route path="/appointment-create" element={<PickDate />} />
            <Route path="/appointment-create/set-time" element={<SetTime />} />
            <Route
              path="/appointment-create/input-field"
              element={<InputField />}
            />
            <Route path="/appointment-check" element={<Check />} />
          </Routes>
        </MemoryRouter>
      </div>
    </AppProvider>
  );
}

export default App;
