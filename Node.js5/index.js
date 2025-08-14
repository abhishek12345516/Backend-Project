const express = require('express');
const cors = require('cors');
const { userAuthentication, isAdmin } = require('./Authentication');

const app = express();
app.use(cors()); //third-party middleware
app.use(express.json()); //inbuilt middleware for parsing JSON

app.set('view engine', 'pug'); //set up template engine
app.get('/message', (req, res) => {
    res.render('message', { title: 'Greeting', message:'Welcome to our website!' });
})

app.get('/users', (req, res) => {
    res.render('users',{
        users:[
            {id:1,name:'abhishek',email:'abhi@gmail.com',country:'India'},
            {id:2,name:'ramesh',email:'ramesh@gmail.com',country:'USA'},
            {id:3,name:'ramesh',email:'ramesh@gmail.com',country:'India'}
        
        ]
    })
})


app.get('/apiusers',async (req, res) => {
    const resp =await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await resp.json();
    res.render('apiusers',{users:json});
})

app.use((req, res, next) => {
    console.log('Gernal middleware');
    next();
}); //custom middleware
//2nd option is called as midddleware
app.get('/profile', userAuthentication, (req, res) => {
    res.send('profile page');
})

app.get('/sales', userAuthentication, isAdmin, (req, res) => {
    res.send('userSales page');
})

app.get('/', (req, res) => {
    res.send('Home page');
})

app.use('/api/product', require('./productroute'));

app.listen(5000, () => {
    console.log('Server started on port 5000')
});