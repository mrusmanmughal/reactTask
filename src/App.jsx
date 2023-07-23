import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Otp from "./Pages/Otp";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Footer from "./Components/Footer";
import LayoutApp from "./UI/LayoutApp";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="signup" />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/otp" element={<Otp />} />
          {/* Nested Routing  */}
          <Route path="dashboard" element={<LayoutApp />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="messages" element={<Messages />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
