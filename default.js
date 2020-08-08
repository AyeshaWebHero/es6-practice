function add(num1, num2 = 7) {
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}

const total = add(15);
console.log(total);

// function createUser(name, 
//     ____?____
//     ){
//     const user = {};
//     user.name = name;
//     user.age = age;
//     return user;
//     }