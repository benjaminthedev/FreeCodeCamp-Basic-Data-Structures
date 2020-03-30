function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    //A nested for loop must be used to search through every element in the array.
    for (let i = 0; i < arr.length; i++) {
        //Every element of the array must then be compared to the 
        //elem parameter passed through the filteredArray() function.
        if (arr[i].indexOf(elem) == -1) {
            //If a match is NOT found then 
            //newArr have that entire subarray added. The push() function is very useful here.
            newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
