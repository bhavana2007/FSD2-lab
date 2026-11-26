const express = require('express');
const session = require('express-session');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(session({secret:'fsd2-lab-demo-only',resave:false,saveUninitialized:false}));
app.use((req,res,next)=>{console.log(req.method,req.url);next();});
app.get('/',(req,res)=>res.send('<form action="/login" method="POST"><input name="username" placeholder="Name"><button>Login</button></form>'));
app.post('/login',(req,res)=>{
 if(!req.body.username) return res.status(400).send('Enter username');
 req.session.username=req.body.username; res.redirect('/profile');
});
app.get('/profile',(req,res)=>req.session.username?res.send('Welcome '+req.session.username+' <a href="/logout">Logout</a>'):res.redirect('/'));
app.get('/logout',(req,res)=>req.session.destroy(()=>res.redirect('/')));
app.listen(3000,()=>console.log('Open http://localhost:3000'));
