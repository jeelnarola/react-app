import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Home from './Pages/Home';
import { BrowserRouter,Routers,Route, Routes} from 'react-router-dom';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
     {/* <Header/> */}
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        </Route>
      </Routes>  
    </BrowserRouter>
    </div>
  );
}

export default App;
