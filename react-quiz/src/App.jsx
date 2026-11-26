import {useState} from 'react';
const questions=[
 {text:'React is used for?',options:['Database','User Interfaces','Operating System'],answer:1},
 {text:'Which hook stores state?',options:['useState','useRoute','useStyle'],answer:0},
 {text:'Which symbols insert JS in JSX?',options:['()','{}','[]'],answer:1}
];
export default function App(){
 const [index,setIndex]=useState(0),[score,setScore]=useState(0);
 function choose(i){if(i===questions[index].answer)setScore(s=>s+1);setIndex(n=>n+1);}
 if(index===questions.length)return <main><h1>Quiz Complete</h1><h2>Score: {score} / {questions.length}</h2><button onClick={()=>{setIndex(0);setScore(0);}}>Restart</button></main>;
 const q=questions[index];return <main><h1>Quiz</h1><p>Question {index+1} of {questions.length}</p><h2>{q.text}</h2>{q.options.map((o,i)=><div key={i}><button onClick={()=>choose(i)}>{o}</button></div>)}</main>;
}
