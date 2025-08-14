import { greeting,welcome } from "./modules1.mjs";
import { student } from "./modules2.mjs";


welcome();
greeting("Abhishek Prajapati");

let stu1 = new student(101,'Abhishek prajapati','abhiprajapati@gmail.com','India');
let stu2 = new student(102,'Suresh kumar','suresh@gmail.com','USA');
let stu3 = new student(103,'Ramesh Prajapati','ramesh@gmail.com','Candada');

stu1.getdata();
stu2.getdata();
stu3.getdata();