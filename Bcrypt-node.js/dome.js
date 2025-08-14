const bcrypt = require('bcrypt');

async function encrypt(password) {
    const hashPassword = await bcrypt.hash(password, 12);
    console.log(`Hashed password: ${hashPassword}`);
    const match = await bcrypt.compare('Abhishek@123', hashPassword);
    console.log(`Password match: ${match}`);
}

const password = 'Abhishek@123';
encrypt(password);

