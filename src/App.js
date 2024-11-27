import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeLayout from "./pages/HomeLayout";
import ComingSoonLayout from "./pages/ComingSoonLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeLayout />} />
          <Route path="security" element={<ComingSoonLayout />} />
          <Route path="about-us" element={<ComingSoonLayout />} />
          <Route path="blog" element={<ComingSoonLayout />} />
          <Route path="contact" element={<ComingSoonLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
