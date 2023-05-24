import "./App.css";
import About from "./components/About";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Recording from "./components/Recording";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Collection />
      <Recording />
      <Footer />
    </div>
  );
}

export default App;
