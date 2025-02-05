import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import LoginStudent from "../components/LoginPage/LoginStudent";
import LoginTeacher from "../components/LoginPage/LoginTeacher";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teacher" element={<LoginTeacher />} />
        <Route path="/student" element={<LoginStudent />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
