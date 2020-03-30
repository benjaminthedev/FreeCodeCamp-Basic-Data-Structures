function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) {
        return true;
    } else if (arr.indexOf(-1)) {
        return false;
    }

    //OR you can do it this way:

    // if (arr.indexOf(elem) >= 0) {
    //   return true;
    // }
    // return false;



    // Or this way - which is clean and less code:

    //return arr.indexOf(elem) >= 0 ? true : false;

    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
