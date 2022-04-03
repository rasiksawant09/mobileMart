// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
// import { Routes, Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Product />
      {/* <Routes>
        <Route to='/' component={Home} />
        <Route to='/' component={Product} />
        <Route to='/' component={About} />
        <Route to='/' component={Contact} />
        
      </Routes> */}
      <Footer/>
    </>
  );
}

export default App;
