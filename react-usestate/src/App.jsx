import {useState} from 'react';
export default function App(){
 const [name,setName]=useState('Student'),[input,setInput]=useState('');
 return <main><h1>Student: {name}</h1><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter student name"/><button onClick={()=>setName(input.trim()||name)}>Update Name</button></main>;
}
