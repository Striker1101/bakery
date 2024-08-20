import "./App.css";
import Routes from "./AllRoutes";
import Footer from "./utility/vendor/Footer";
import Nav from "./utility/vendor/NavBar";
function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   getMessage();
  // }, []);

  // async function getMessage() {
  //   const result = await fetch("/api/message");
  //   const json = await result.json();

  //   setMessage(json);
  // }

  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
