const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
//code here
if (arrayOfString === null || arrayOfString === undefined) {
return undefined
}
let max = 0
let result = []
for (let i = 0; i < arrayOfString.length; i++) {
if (arrayOfString[i].length > max) {
max = arrayOfString[i].length
}
}
for (let i = 0; i < arrayOfString.length; i++) {
if (arrayOfString[i].length === max) {
result.push(arrayOfString[i])
}
}
return result
}
module.exports = getMaxLengthString