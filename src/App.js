import { Router } from "@reach/router";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/"/>
      </Router>
    </div>
  );
}

export default App;
