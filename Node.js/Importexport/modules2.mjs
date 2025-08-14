export class student{


    constructor(id,name,email,country){
        this.id = id;
        this.name = name;
        this.email = email;
        this.country = country;
    }

    getdata(){
        console.log("--------------------------------");
        console.log(`ID: "+${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Country: ${this.country}`);
    }
}