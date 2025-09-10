import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/components/Dashboard";
import MapButton from "./pages/components/MapButton";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mapbutton" element={<MapButton />} />

      </Routes>
    </div>
  );
};

export default App;
