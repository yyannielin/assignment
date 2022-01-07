const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({limit:'1mb'}));

app.post('/register',(req,res)=>{
  const register = {
    id : req.body.id,
    email : req.body.email,
    password : req.body.password
  }
  res.send(register);
})

app.post('/auth',(req,res)=>{
  const register = {
    id : req.body.id,
    email : req.body.email,
    password : req.body.password
  }
  res.send(register);
})

contacts = [{
  "id": "121c9ba1-496e-4527-b471-d2f2a53f4ef0",
  "first_name": "Filomena",
  "last_name": "Pagac",
  "title": "Human Integration Representative",
  "email": "Jesus64@hotmail.com",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/bboy1895/128.jpg",
  "created_at": "2017-08-29T06:51:23.169Z",
  "usexr_id": "14e9d648"
}]

app.get('/api/contacts',(req,res)=>{
  res.status(200).send(contacts);
})

app.get('/api/contacts/:id', (req, res) => {
  const user = contacts.find(u => u.id === parseInt(req.params.id));
  // if (!user) res.status(404).send("Contact id not found");
  res.send(contacts);
});

app.post('/api/contacts', (req, res) => {

  if (!req.body.first_name) {
    console.log(req.body.first_name)
    res.status(400).send("Name is required");
    return;
  } 

  const contact = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    title: req.body.title,
    email: req.body.email,
    image: req.body.image,
    created_at: req.body.created_at,
    user_id: req.body.user_id
  }

  contacts.push(contact);
  res.send(contact);
});

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server started'));