import './App.css';
import { SimpleBlock } from './components/SimpleBlock/SimpleBlock';
import ScrollBlock from './components/ScrollBlock/ScrollBlock';

function App() {
  return (
    <div className="App">
      <div className='partOne'>
        <div className='blockOne' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/plateautech.svg'})` }}>
          <SimpleBlock
            title="Un plateau technique de pointe"
            paragraph="Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. Scelerisque at 
            et pellentesque arcu bibendum eleifend 
            elementum nec rutrum consectetum. Ultrices
            eleifend elementum nec.Ultrices eleifend elementum 
            nec rutrum consectetur."
          />
        </div>
        
        <div className='scrollBlockContainer'>
          <ScrollBlock />
        </div>
      </div>

      <div className='partOne'>
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
    </div>
  );
}

export default App;
