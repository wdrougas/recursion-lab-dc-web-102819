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
         return true
       }
}


function addUpTo(index, array) {
    if (index > 0) {
        return addUpTo(index - 1, array.slice(0, index)) + array[index]
    } else {
        return array[index]
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(array, num) {
    if (!array.length) {
        return false
    } else if (array[0] === num) {
        return true
    } else {
        return includesNumber(array.slice(1), num)
    }
}