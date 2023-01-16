import './App.css';
import ItemListContainer from './components/itemListContainer';
import MainContent from './components/Main';
import Navbar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import NoPage from './noPage/NoPage';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
        <Route path="/ropaHombre" element={<h1>HOLA MUNDO</h1>}/>
        <Route path="/ropeMujer" element=""/>
        <Route path="/electronica" element=""/>
        <Route path="/joyeria" element=""/>
        <Route path="/carrito" element=""/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
