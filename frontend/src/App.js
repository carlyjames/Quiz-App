import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from '../src/Utils/PrivateRoute'
import { AuthProvider } from '../src/context/AuthContext'
import { Navbar } from "./components";
// pages
import { Home, Signup, Login, OTP, Dashboard, Profile } from "./Pages";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } />
            <Route path="/profile" element={ <PrivateRoute> <Profile /> </PrivateRoute> } />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App
