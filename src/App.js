import './App.css';
import { SimpleBlock } from './components/SimpleBlock/SimpleBlock.jsx';

function App() {
  return (
    <div className="App">
      <div className='blockOne'>
        <img
          src={process.env.PUBLIC_URL + '/plateautech.svg'}
          alt="Logo de l'application"
          className="logo-img"
        />

        <SimpleBlock />
      </div>

    </div>
  );
}

export default App;
