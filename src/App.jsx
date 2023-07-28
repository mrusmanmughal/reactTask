import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Footer from "./Components/Footer";
import LayoutApp from "./UI/LayoutApp";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { UseAuth } from "./Context/AuthContext";

function App() {
  const queryCLient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  const { state, dispatch } = UseAuth();
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="signup" />} />
            <Route path="/signup" element={<SignIn />} />
            {/* Nested Routing  */}
            {state.isAuthenticated && (
              <Route path="dashboard" element={<LayoutApp />}>
                <Route element={<Navigate replace to="/dashboard" />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="chat" element={<Messages />} />
              </Route>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "1rem" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "30rem",
              padding: "20px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />{" "}
      </QueryClientProvider>
    </>
  );
}

export default App;
