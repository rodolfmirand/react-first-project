import './App.css';
import Person from './components/person/Person';
import SayMyName from './components/sayMyName/SayMyName';
import Event from './components/event/Event';
import Form from './components/form/Form'

function App() {
  const name = 'Walter White'

  return (
    <div id='container'>
      <Person name={name} age={52} occupation="Drug Dealer" image="/mr-white.jpeg" />
      <SayMyName name="Heisenberg" />

      <Event number={1} />
      <Form />
    </div>
  );
}

export default App;
