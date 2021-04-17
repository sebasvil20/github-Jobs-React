import { Router } from "@reach/router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/"/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
