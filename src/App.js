import './App.css';
import HelloWorld from './components/HelloWorld';
import Person from './components/Person';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Heiseinberg'

  return (
    <div id='container'>
      <p className='paragraph'>Primeiro app react</p>
      <HelloWorld />
      <SayMyName name={name} />
      <Person name={name} age="52" occupation="Drug Dealer" image="/mr-white.jpeg"/>
    </div>
  );
}

export default App;
