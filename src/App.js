import "./App.css";
import Routes from "./AllRoutes";
import Footer from "./utility/vendor/Footer";
import Nav from "./utility/vendor/NavBar";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
