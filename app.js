const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');

const Students = [
    {
        id: 1,
        name: 'Aman',
        contact: '+919324793487',
        email: 'aman@gmail.com',
        age: 22,
        program: 'B.Sc. IT',
        semester: 'II'
    },
    {
        id: 2,
        name: 'Anil',
        contact: '+919324793487',
        email: 'anil@gmail.com',
        age: 22,
        program: 'B.Sc. IT',
        semester: 'II'
      },
      {
        id: 3,
        name: 'Anup',
        contact: '+919324793488',
        email: 'anup@gmail.com',
        age: 21,
        program: 'MCA',
        semester: 'III'
      }
];
app.get('/',(req,res)=>{
    res.render('student.ejs',{Students})
});
app.get('/add',(req,res)=>{
    res.render('add.ejs')
});
app.get('/view/:id',(req,res)=>{
    const id = Number(req.params.id);
    let data = Students.filter((student) => student.id === id);
    console.log(data);
    res.render('show',data[0]);
});

app.listen(3000,()=>{
    console.log(`Port is running on ${port}`)
})