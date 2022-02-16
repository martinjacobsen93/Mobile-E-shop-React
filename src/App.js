import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      {/* El routeo de las URL se realizó con React Router-Dom y se utilizan las vistas de Home, Contacto, ItemListContainer, ItemDetailContainer, CartPage y Error404*/}
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contacto" element={<Contacto />}/>

          <Route path="/productos" element={<ItemListContainer titulo={'Tienda de celulares'} />} />

          <Route path="/products/:marcaId" element={<ItemListContainer titulo={'Filtrado por marca'} />} /> {/* FILTRADO POR MARCA DE CELULAR*/}

          <Route path="/producto/:productoId" element={<ItemDetailContainer /> }/> {/* VISTA DEL DETALLE DE CELULAR*/}

          <Route path="/cart" element={<CartPage /> }/>

          <Route path="*" element={<Error404 />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;