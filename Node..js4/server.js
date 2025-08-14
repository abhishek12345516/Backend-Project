const express = require('express');

const app = express();
app.use(express.json());
const users = [];

app.post('/api/user', (req, res) => {
    const data = req.body;
    users.push(data); 
    res.status(201).send('NEW USER ADDED');
})
app.get('/api/user', (req, res) => {
        res.status(200).send(users);
})
app.get('/api/user/:id', (req, res) => {
    const id=req.params.id; // get the ULR parameter to get the user ID
    const user = users.find((val)=>val.id==id); // check if the user available in the users array 
       if(user) {
        res.status(200).send(user);
    }else{
        res.status(404).send('User not found');
    }
        
})
app.put('/api/user/:id', (req, res) => {
    const id = req.params.id; // get the user ID from the request body
    const index = users.findIndex((val)=>val.id==id); // find the index of the user in the users array
    if(index>=0){
        users[index] = req.body; // update the user in the users array
        res.status(200).send('User updated');
    } else{
        res.status(404).send('User not found');
    }
})
app.delete('/api/user/:id', (req, res) => {
    const id = req.params.id; // get the user ID from the request body
    const index = users.findIndex((val)=>val.id==id); // find the index of the user in the users array
    if(index>=0){
        users.splice(index, 1); // remove the user from the users array
        res.status(200).send('User deleted');
    }else{
        res.status(404).send('User not found');
    }
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
})