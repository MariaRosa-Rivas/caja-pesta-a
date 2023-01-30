import { useState } from 'react';
import './App.css';
import ListaEntradas from './components/ListaEntradas'
import Ranking from './components/Ranking';

function App() {

  const [leader, setLeader] = useState("");

  return (
    <div className= "App">
      <ListaEntradas setLeader={setLeader} />
      <Ranking leader = {leader} />
    </div>
  );
}

export default App;
