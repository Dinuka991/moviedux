import logo from "./logo.svg";
import "./App.css";
import "./styles.css"; // Importing the styles.css file
import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
