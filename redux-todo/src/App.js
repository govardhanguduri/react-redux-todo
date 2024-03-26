import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbaar from "./components/Navbaar";

function App() {
  return (
    <div className="App">
      <Navbaar />
      <Home />
    </div>
  );
}

export default App;
