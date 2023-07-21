import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Otp from "./Pages/Otp";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Footer from "./Components/Footer";
import LayoutApp from "./UI/LayoutApp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutApp />}>
            <Route index element={<Navigate replace to="signup" />} />
            <Route path="/signup" index element={<SignIn />} />
            <Route path="/opt" index element={<Otp />} />
          </Route>

          <Route path="/dashboard/Users" index element={<Users />} />
          <Route path="/dashboard/messages" index element={<Messages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
