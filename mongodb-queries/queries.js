// Run in mongosh, NOT with NodeJS.
use fsd2lab
if(!db.getCollectionNames().includes('courses')) db.createCollection('courses')
db.courses.insertMany([{name:'Maths',marks:90},{name:'DBMS',marks:85},{name:'React',marks:95}])
db.courses.find()
db.courses.find().sort({marks:-1})
db.courses.find().limit(2)
db.courses.find().sort({marks:-1}).limit(2)
