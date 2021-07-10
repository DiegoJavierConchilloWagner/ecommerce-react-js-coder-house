import "./App.css";
import Navbar from "./components/Navbar/navbar";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemCount from "./components/count/ItemCount";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer greeting="Hola Usuario" />

        <ItemCount />
        
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
