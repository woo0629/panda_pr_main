import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/toolbar";
import Slide from "./components/slide";
import Footer from "./components/footer";
import PopularProducts from './components/popularItem';
function App() {


  return (
    <div className="App">

        <Toolbar/>
        <Slide/>
        <PopularProducts/>
        <Footer/>
    </div>
  );
}

export default App;
