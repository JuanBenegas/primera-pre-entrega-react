import './App.css';
import ItemListContainer from './components/itemListContainer';
import MainContent from './components/Main';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <MainContent/>
    </div>
  );
}

export default App;
