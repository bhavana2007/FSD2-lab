const express = require('express');
const app = express();
app.get('/', (req,res) => res.send('Welcome to ExpressJS!'));
app.get('/student/:name', (req,res) => res.send('Hello ' + req.params.name));
app.get('/search', (req,res) => res.json({course:req.query.course || 'Not given',year:req.query.year || 'Not given'}));
app.listen(3000,()=>console.log('Open http://localhost:3000'));
