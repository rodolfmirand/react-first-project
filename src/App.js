import './App.css';
import List from './components/List';
import Person from './components/person/Person';
import SayMyName from './components/sayMyName/SayMyName';

function App() {
  const name = 'Walter White'

  return (
    <div id='container'>
      <SayMyName name="Heisenberg" />
      <Person name={name} age="52" occupation="Drug Dealer" image="/mr-white.jpeg" />
      <List />
    </div>
  );
}

export default App;
