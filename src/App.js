import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Navbar from './components/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import NoPage from './noPage/NoPage';
import { exportDataBatch } from './services/firestore';
import CartContainer from './components/cartContainer/CartContainer';
import { CartContextProvider } from './storage/cartContext';


function App() {


  return (
    <CartContextProvider>
        <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="/ropaHombre" element={<h1>HOLA MUNDO</h1>}/>
          <Route path="/ropeMujer" element=""/>
          <Route path="/electronica" element=""/>
          <Route path="/joyeria" element=""/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}



export default App;
