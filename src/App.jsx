import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import RootLayout from "./layout/RootLayout";
import Auth from "./pages/Auth";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/project" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/blog" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
