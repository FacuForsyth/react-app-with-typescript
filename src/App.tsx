import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './components/types';
import { getAllSubs } from './services/getAllSubs';

/* const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace moderador'
  },
  {
    nick: 'facu',
    subMonths: 8,
    avatar: 'https://i.pravatar.cc/150?u=facu',
  }
]; */

//se recomienda crear una interface para los estados locales
interface AppState {
  subs: Array<Sub>
  newSubNumber: number
}

function App() {
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null);
  
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect(() => {
    //setSubs(INITIAL_STATE)  //sin api
    getAllSubs().then(setSubs)  //con api
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>FACU SUBS</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;