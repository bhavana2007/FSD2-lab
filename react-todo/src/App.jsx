import {useState} from 'react';
export default function App(){
 const [tasks,setTasks]=useState([]),[task,setTask]=useState('');
 function add(e){e.preventDefault();if(task.trim()){setTasks([...tasks,task.trim()]);setTask('');}}
 return <main><h1>To-Do List</h1><form onSubmit={add}><input value={task} onChange={e=>setTask(e.target.value)} placeholder="New task"/><button>Add Task</button></form><ul>{tasks.map((t,i)=><li key={i}>{t}</li>)}</ul></main>;
}
