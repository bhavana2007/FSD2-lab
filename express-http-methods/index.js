const express = require('express');
const app = express(); app.use(express.json());
let students = [{id:1,name:'Bhavana'}];
app.get('/students',(req,res)=>res.json(students));
app.post('/students',(req,res)=>{
 if (!req.body.name) return res.status(400).json({error:'Name required'});
 const student={id:Date.now(),name:req.body.name}; students.push(student); res.status(201).json(student);
});
app.delete('/students/:id',(req,res)=>{
 const id=Number(req.params.id);
 if (!students.some(s=>s.id===id)) return res.status(404).send('Student not found');
 students=students.filter(s=>s.id!==id); res.json({message:'Deleted'});
});
app.listen(3000,()=>console.log('Open http://localhost:3000'));
