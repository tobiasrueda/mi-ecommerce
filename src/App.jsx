import './App.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a EMPILCHADOS! Descubrí nuestras ofertas 🛒" />
    </>
  );
};

export default App;
