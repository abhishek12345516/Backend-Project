function main(){
    console.log("function called from app.js");
}

function fun1(){
    console.log("fun1 called");
}

function fun2(){
    console.log("fun2 called");
}

export {main as default, fun1, fun2};