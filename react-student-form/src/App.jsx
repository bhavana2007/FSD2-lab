import {useState} from 'react';
function StudentForm({onSave}){
 const [name,setName]=useState('');
 return <form onSubmit={e=>{e.preventDefault();onSave(name);}}><input value={name} onChange={e=>setName(e.target.value)} placeholder="Student name"/><button>Display</button></form>;
}
function StudentDetails({name}){return <h2>Student Name: {name||'Not entered'}</h2>;}
export default function App(){const [name,setName]=useState('');return <main><h1>Student Details</h1><StudentForm onSave={setName}/><StudentDetails name={name}/></main>;}
