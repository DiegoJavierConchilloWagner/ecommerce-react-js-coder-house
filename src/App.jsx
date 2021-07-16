import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import "./App.css";
// import "./styles.scss"
import Navbar from "./components/basic/Navbar/navbar";
import Footer from "./components/basic/Footer/Footer";
import Inicio from "./pages/inicio/Inicio";
import Productos from "./pages/productos/Productos"
import Detalle from "./pages/productos-detalle/Detalle";
import Err404 from "./pages/404/404";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
        <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/inicio" component={Inicio} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/productos-detalle" component={Detalle} />
            <Route exact path="/preguntas" />
            <Route exact path="/nosotros" />
            <Route exact path="/contacto" />
            <Route path="*" component={Err404}/>
          </Switch>
        </main>
      </Router>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
