//=========Understand OS module

// const { restart } = require("nodemon")
// const os= require ('os')
// const path = require ('path')
// const user = os.userInfo()
// console.log(user)
// console.log(`The system uptime is ${os.uptime} seconds`)

//===========Understand Path module 

// const newPath = path.join('/sample','tester','text.txt')
// console.log(newPath)
// const absolutePath = path.join(__dirname,'sample','tester','text.txt')
// console.log(absolutePath)

//======= destructing 
//======= Array Destructing - Order is important
// const names = ['name1','name2','name3','name4']
// Will move the arrays values to the variables. Use empty commas to skip a variable
// const [first,second,,fourth] = names
// Rest Operator - Will move the remaining array to rest variable
// const [first, second,...rest] = names
// console.log(first,second,rest)
//======= Objects Destructing - Property name is used for destructing
// const nameDetail = {firstname:'Jinu', secondname:'Babu',city:'Kochi'}
// const {firstname,secondname,...rest} = nameDetail
// console.log(firstname, secondname, rest)
// const {secondname,...rest} = nameDetail
// console.log(secondname,rest)
// To change the property name for the field using labels
// const {firstname:first, secondname:second} = nameDetail
// console.log(first,second)


