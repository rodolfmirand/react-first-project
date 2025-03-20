import './App.css';
import Person from './components/person/Person';
import SayMyName from './components/sayMyName/SayMyName';
import Event from './components/event/Event';
import Form from './components/form/Form'
import Conditional from './components/Conditional';

function App() {
  const name = 'Walter White'

  return (
    <div id='container'>
      <Person name={name} age={52} occupation="Drug Dealer" image="/mr-white.jpeg" />
      <SayMyName name="Heisenberg" />
      <Conditional />
    </div>
  );
}

export default App;
