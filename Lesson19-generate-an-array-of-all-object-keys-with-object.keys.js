let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line


    //This is the correct way
    //The instructions were to just 'return' - an array containing all the properties in the object it receives as an argument.

    return Object.keys(obj);


    //Thought I had to use an if statement?!
    // if(Object.keys(obj)){
    //   return true;
    // }  

    //Put data in a newArr const but actually needed to just return
    //const newArr = Object.keys(obj);
    // console.log(newArr);




    // Only change code above this line
}

console.log(getArrayOfUsers(users));
