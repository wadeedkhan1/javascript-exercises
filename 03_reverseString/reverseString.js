const reverseString = function(string) {
    let start = 0;
    let end = string.length-1
    let reversed = ""
    for(let i=0; i<string.length; i++){
        reversed += string[string.length-i-1];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
