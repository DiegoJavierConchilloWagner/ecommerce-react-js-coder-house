import "./App.css";
// import "./styles.scss"
import Navbar from "./components/Navbar/navbar";
// import ItemListContainer from "./components/Navbar/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemCount from "./components/count/ItemCount";
// import ItemList from "./components/itemListContainer/itemList";
// import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Products from "./components/products/products"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        {/* <ItemListContainer/> */}
        <br />
        <ItemCount />
        <br /><br />
        <Products />
        <br />
        {/* <ItemList /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
