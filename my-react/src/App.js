import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import Product from "./product";
import Registrasi from './Registrasi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello nama="Valencio Arjun" pesan="Selamat Datang di IF31"/>
        <Hello />
        <Product />
        <Registrasi />
      </header>
    </div>
  );
}

export default App;
