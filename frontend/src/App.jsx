import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Login } from "./pages/Login.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { List } from "./components/List.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
