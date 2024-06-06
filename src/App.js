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

        <SimpleBlock
          title="Un plateau technique de pointe "
          paragraph="Vitae volutpat commodo velit vel donec musnisl eleifend tincidunt. Scelerisque at 
          et pellentesque arcu bibendum eleifend 
           elementum nec rutrum consectetum. Ultrices
          eleifend elementum nec.Ultrices eleifend elementum 
          nec rutrum consectetur."
        />

      </div>

      <ScrollBlock/>

      <div className='blockTwo'>
        <img
          src={process.env.PUBLIC_URL + '/implanto.jpg'}
          alt="Logo de l'application"
          className="logo-img"
        />

        <SimpleBlock
          title="Implantologie"
          paragraph="Vitae volutpat commodo velit vel donec mus nisl 
          eleifend tincidunt. Scelerisque at et pellentesque arcu bibendum. 
          Ultrices eleifend elementum nec rutrum consectetur cursus eleifend. 
          Scelerisque at et pellentesque arcu bibendum. Ultrices eleifend elementum nec. 
          Ultrices rutrum consectetur. Vitae volutpat commodo velit vel donec mus nisl 
          eleifend tincidunt. Scelerisque at et pellentesque arcu bibendum. 
          Consectetur cursus eleifend. Scelerisque at et pellentesque arcu bibendum. 
          Ultrices eleifend elementum nec.Ultrices eleifend elementum nec rutrum consectetur."
        />

      </div>

    </div>
  );
}

export default App;
