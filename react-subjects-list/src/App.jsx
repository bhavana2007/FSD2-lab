import {useState} from 'react';
export default function App(){
 const [subjects,setSubjects]=useState([]),[subject,setSubject]=useState('');
 function add(e){e.preventDefault();if(subject.trim()){setSubjects([...subjects,subject.trim()]);setSubject('');}}
 return <main><h1>Subjects</h1><form onSubmit={add}><input value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject name"/><button>Add</button></form>{subjects.length===0?<p>No subjects added.</p>:<ul>{subjects.map((s,i)=><li key={i}>{s}</li>)}</ul>}</main>;
}
