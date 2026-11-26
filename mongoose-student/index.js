const mongoose=require('mongoose');
const schema=new mongoose.Schema({name:String,roll:Number,branch:String});
const Student=mongoose.model('Student',schema);
async function main(){
 await mongoose.connect('mongodb://127.0.0.1:27017/fsd2lab');
 const student=await Student.create({name:'Bhavana',roll:1,branch:'AIML'});
 console.log('Inserted:',student);
 console.log('Students:',await Student.find());
 await mongoose.disconnect();
}
main().catch(err=>{console.error('MongoDB connection error:',err.message);process.exit(1);});
