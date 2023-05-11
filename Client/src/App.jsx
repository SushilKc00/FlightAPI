import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom/dist";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
