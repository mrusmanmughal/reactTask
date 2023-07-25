import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Otp from "./Pages/Otp";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Footer from "./Components/Footer";
import LayoutApp from "./UI/LayoutApp";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import { Language } from "./Context/UseLanguagContext";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";

function App() {
  const queryCLient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="signup" />} />
            <Route path="/signup" element={<SignIn />} />
            <Route path="/otp" element={<Otp />} />
            {/* Nested Routing  */}
            <Route path="dashboard" element={<LayoutApp />}>
              <Route element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="chat" element={<Messages />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
