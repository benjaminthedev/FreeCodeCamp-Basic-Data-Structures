function countOnline(usersObj) {
    // Only change code below this line
    //Store in result 
    let result = 0;
    //For in loop
    for (let user in usersObj) {
        //If statement to find out
        //if the user.online is set to true
        if (usersObj[user].online === true) {
            //Increment the result using:
            result++;
        }
    }
    //Return the result:
    return result;
    // Only change code above this line
}
