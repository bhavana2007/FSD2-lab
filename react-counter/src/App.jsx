import {useState} from 'react';
function Counter({title}){
 const [count,setCount]=useState(0);
 return <main><h1>{title}</h1><h2>Count: {count}</h2><button onClick={()=>setCount(c=>c+1)}>Increment</button><button onClick={()=>setCount(c=>c-1)}>Decrement</button></main>;
}
export default function App(){return <Counter title="Counter with Props and State"/>;}
