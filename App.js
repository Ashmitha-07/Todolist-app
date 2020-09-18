import React ,{useState,useEffect } from 'react';
import Todo from './Todo'
import { Button, FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

import './App.css';
function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState(''); 
  // when the app loads,we need to listen to the database and fetch new todos as the get added/removed
  useEffect(() => {
    // this code here ... fires when the app.js loads
    db.collection(' todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })

  },[]);

  
  const addTodo = (event) =>{
    event.preventDefault(); // will stop from REFRESH
    setTodos([...todos, input])
    // this will fire off when we click the button 
   db.collection(' todos').add({
     todo: input,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   })
    setInput('')  // clear the input after hitting the submit button 
  }
  return (
    <div className="App">
      <h1>hello world!! </h1>
      <form>
      {/* <input value={input} onChange={(event)=> setInput(event.target.value)}/> */}
      <FormControl>
        <InputLabel>WRITE TODO LIST</InputLabel>
        <Input value={input} onChange={(event)=> setInput(event.target.value)}  />
        {/* <FormHelperText></FormHelperText> */}
    </FormControl>
      <Button disabled={!input}  type = "submit"  onClick={addTodo} variant="contained" color="primary">
      Add TODO
      </Button>
      {/* <button type = "submit" onClick={addTodo} >Add TODO</button> */}
      </form>
      <ul>
        
        {todos.map( todo => (
           <Todo todo={todo} /> 
            // <li>{todo}</li> 
       ))} 
      </ul>
    </div>
  );
}

export default App;
