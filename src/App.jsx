import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDatabase from "./pages/admin/AdminDatabase";
import AdminSetting from "./pages/admin/AdminSetting";
import AdminUserLog from "./pages/admin/AdminUserLog";

// Operation
import OperationDashboard from "./pages/operation/OperationDashboard";
import OperationMyTicket from "./pages/operation/OperationMyTicket";
import OperationPerformance from "./pages/operation/OperationPerformance";
import OperationTicketApproval from "./pages/operation/OperationTicketApproval";

// Support
import SupportDashboard from "./pages/support/SupportDashboard";
import SupportMyTicket from "./pages/support/SupportMyTicket";
import SupportPerformance from "./pages/support/SupportPerformance";

// User
import UserDashboard from "./pages/user/UserDashboard";
import UserMyTicket from "./pages/user/UserMyTicket";
import UserNewTicket from "./pages/user/UserNewTicket";

//Common
import EditProfile from "./pages/EditProfile";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";



function PrivateRoute({ children, allowedRoles }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const userRole = currentUser.role;

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              Unauthorized
            </div>
          )
  }
  return children;
}



export default function App() {
  return (
    <Router>
        <Routes>

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />


          {/* Common */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />}/>


          {/* Admin */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/database"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminDatabase />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminSetting />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/user-logs"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminUserLog />
              </PrivateRoute>
            }
          />


          {/* Operation */}
          <Route
            path="/operation/dashboard"
            element={
              <PrivateRoute allowedRoles={["operation"]}>
                <OperationDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/operation/my-ticket"
            element={
              <PrivateRoute allowedRoles={["operation"]}>
                <OperationMyTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/operation/performance"
            element={
              <PrivateRoute allowedRoles={["operation"]}>
                <OperationPerformance />
              </PrivateRoute>
            }
          />
          <Route
            path="/operation/ticket-approval"
            element={
              <PrivateRoute allowedRoles={["operation"]}>
                <OperationTicketApproval />
              </PrivateRoute>
            }
          />


          {/* Support */}
          <Route
            path="/support/dashboard"
            element={
              <PrivateRoute allowedRoles={["support"]}>
                <SupportDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/support/my-ticket"
            element={
              <PrivateRoute allowedRoles={["support"]}>
                <SupportMyTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/support/performance"
            element={
              <PrivateRoute allowedRoles={["support"]}>
                <SupportPerformance />
              </PrivateRoute>
            }
          />


          {/* User */}
          <Route
            path="/user/dashboard"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/my-ticket"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <UserMyTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/new-ticket"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <UserNewTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/profile"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/profile/edit"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <EditProfile />
              </PrivateRoute>
            }
          />


          {/* Fallback */}
          <Route path= "*" element={<Navigate to="/login" />} />
      

        </Routes>
    </Router>
  );
}
