import logo from "./logo.svg";
import "./App.css";
import "./styles.css"; // Importing the styles.css file
import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid"; // Importing the MoviesGrid component

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MoviesGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
