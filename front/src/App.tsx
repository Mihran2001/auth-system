import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/auth/SignIn/index";
import SignUp from "./pages/auth/SignUp/index";
import HomePage from "./pages/Home/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
