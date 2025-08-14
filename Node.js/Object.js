const students = {
    id : '123',
    name : 'Abhishek Prajapati',
    age : 20,
    email : 'abhi@example.com',
    printDetails : function() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }   
}

module.exports= students; // Output: ID: 123, Name: Abhishek Prajapati, Age: 20, Email: abhi@example.