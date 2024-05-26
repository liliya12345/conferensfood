
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../public/css/bootstrap.min.css";
import "../src/css/bootstrap.min.css";
import Contact from './pages/Contact';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
