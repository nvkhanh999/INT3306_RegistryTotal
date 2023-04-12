import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import AddAccount from "./scenes/addAccount";
import CenterList from "./scenes/centerList";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import CenterDetail from "./scenes/centerDetail";
import RegistryManagement from "./scenes/registryManagement";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/registryManagement" element={<RegistryManagement/>} />
              <Route path="/centerList" element={<CenterList  />} />
              <Route path="/centerList/:centerId" element={<CenterDetail/>} />
              <Route path="/addAccount" element={<AddAccount />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
            </Routes>
          </main>
          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
