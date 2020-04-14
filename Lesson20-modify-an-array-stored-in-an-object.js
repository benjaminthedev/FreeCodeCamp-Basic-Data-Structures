let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line

    /*
      Instructions:
      1, Finish writing it so that it takes a user object
      2, and adds the name of the friend argument to the array stored in user.data.friends 
      3, and returns that array.
    */

    //console.log(user.data.friends);

    //.push() into an array 

    //const newArr = user.data.friends.push(user);
    //console.log(`New Push ${newArr}`);


    //New try:
    //return user.data.friends.push(user);
    //Or
    //return user.data.friends.push(friend);
    //Or
    //return user.data.friends.push(addFriend);
    //Or
    //const newFriends = user.data.friends.push(friend);
    //return newFriends;


    //Answer:

    userObj.data.friends.push(friend);
    return userObj.data.friends;

    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
