import './App.css';
import { SimpleBlock } from './components/SimpleBlock/SimpleBlock.jsx';
import ScrollBlock from './components/ScrollBlock/ScrollBlock.jsx';

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

      <ScrollBlock/>

    </div>
  );
}

export default App;
