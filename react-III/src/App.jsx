import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
//import Login from './components/Login';
//import Register from './components/Register';
import Footer from './components/Footer';
//import Home from './components/Home';
import Cart from "./components/Cart"




function App() {


  return (
    <>
      <Navbar/>
      <Cart/>
      <Login/>
      <Register/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App