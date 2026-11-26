// Run in mongosh, NOT with NodeJS.
use fsd2lab
db.students.insertMany([{roll:1,name:'Bhavana',branch:'AIML'},{roll:2,name:'Ravi',branch:'CSE'}])
db.students.find()
db.students.updateOne({roll:1},{$set:{branch:'AI & ML'}})
db.students.deleteOne({roll:2})
db.students.find()
