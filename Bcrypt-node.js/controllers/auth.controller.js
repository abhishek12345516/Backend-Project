const usermodel = require('../models/user.model');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { name,username, email, password } = req.body;
        if(!name ||!username ||!email ||!password) {
            return res.status(400).send({ message: 'All fields are required.' });
        }
        let user = await usermodel.findOne({ email});
        if(user){
            return res.status(400).send({ message: 'Email already exists.' });
        }
        user = await usermodel.findOne({ username });
        if(user){
            return res.status(400).send({ message: 'Username already exists.' });
        }
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new usermodel({name, username, email, password: hashPassword});
        const resp = await newUser.save();
        return res.status(201).send({message:'User registered successfully.', user:resp});
    } catch (error) {
        res.status(500).send({ message: 'Failed to register user.',error });
    }
}

module.exports = {
    register
}