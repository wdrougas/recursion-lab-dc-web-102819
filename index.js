// Code your solution here!

function printString(str) {
    console.log(str[0])
    if (str.length > 1) {
        let subStr = str.substring(1, str.length)
        printString(subStr)
    } else {
        return true
    }
}

function reverseString(str) {
    console.log(str[str.length - 1])
    if (str.length > 1) {
        let reverseStr = str.substring(0, str.length-1)
        reverseString(reverseStr)
    } else {
        return true
    }
}

function isPalindrome(str) {
    if (str.length > 1) {
       if (str[0] === str[str.length -1]) {
         let newStr = str.substr(1).slice(0, -1)
         isPalindrome(newStr)
       } else {
         return false
       }} else {
           console.log(true)
       }
}


function addUpTo(index, array) {

}