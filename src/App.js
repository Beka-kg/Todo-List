

import { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import Modal from './UI/Modal';

function App() {
  const [first, setfirst] = useState([])
  const [modal, setModal] = useState(false)
  const [id, setId] = useState()

  const test = (data) => {
    setfirst([...first, data])
  }
  
  const showModal=(id)=>{
        setModal(true)
        setId(id)
    }

  const closeModal=()=>{
        setModal(false)
      }

  const deletHandle = ()=>{
    console.log(id);
    const newData = first.filter((el) => el.id !== id)
    setfirst(newData)
    setModal(false)
  } 

  return (
    <div className="App">
      <ToDo onObj={test}/>
      {
        first.map((el)=>(
          <div key={el.id}>
            <h1>{el.title}</h1>
            <button onClick={()=>showModal(el.id)}>Delete</button>
          </div>
        ))
      }
      {modal && <Modal onDelete={deletHandle} onCloseModal={closeModal}/>}
    </div>
  );
}

export default App;
