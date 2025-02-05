import { Link } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Link to={'/student'} className="nav-link">לסטודנטים</Link>
      <Link to={'/teacher'} className="nav-link">למורים</Link>
    </>
  );
}

export default App;
