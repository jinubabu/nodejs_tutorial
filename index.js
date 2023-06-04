// console.log('This is Nodejs Tutorial for begineers');
// let newArray = [10,20,30,40]
// let newArray1 = newArray.map((item)=>{
//     return item*2
// })
// console.log(newArray);
// console.log(newArray1);
// console.log('Installed Nodemon1')
// // process.exit(0);

// const nameH = 'Jinu Babu'
// console.log(nameH)
// console.log(nameH.split(' '))
// console.log(nameH.split())
// console.log(nameH.split('').reverse())
// console.log(nameH.split('').reverse().join(''))
//-----------------------------
//--- Call back Hell 
// first - after 1 sec turn to red
// second - after 3 secs turn to blue
// third - after 2 secs turn to green
// In Sequence
// const first = document.querySelector(".first")
// const second= document.querySelector(".second")
// const third = document.querySelector(".third")

// const clickMe = document.querySelector(".btn")

// first option - Due to Async execution of Settimeout, order of color wil be first, third and second.
// clickMe.addEventListener('click',()=>{
//     setTimeout(()=>{
//         first.style.color = 'Red'
//     },1000)
//     setTimeout(()=>{
//         second.style.color = 'Blue'
//     },3000)
//     setTimeout(()=>{
//         third.style.color = 'Green'
//     },2000)
// });

// Call back Hell. To ensure the processing happens only after the previous step is completed. 
// clickMe.addEventListener('click',()=>{
//    setTimeout(()=>{
//     first.style.color = 'Red'
//     setTimeout(()=>{
//         second.style.color = 'Blue'
//         setTimeout(()=>{
//             third.style.color = 'Green'
//         },2000)
//     },3000)
//    },1000)
// })
// Only the Values defined in the local scope to be used. any global variable at the time of execution will take the file value.
// setTimeout(() => {
//     selectorUpd = `.${selector}`
//     selectedHeading = document.querySelector(selectorUpd)
//     console.log(selectedHeading,color, selector)
//     selectedHeading.style.color = color
// }, time);

// Use promise to avoid call back Hell and ensure Sync processing in Async events
// Promise have 3 states = Pending, Fulfilled(Resolve), Rejected (Reject). A promise should be either Resolved or Rejected. 
// clickMe = document.querySelector(".btn")
// clickMe.addEventListener('click',()=>{
//     console.log("Calling first")
//     changeColor(1000,'first','red')
//         .then(()=>changeColor(3000,'second','blue'))
//         .then(()=> changeColor(2000,'third','green'))
//         .catch((err)=>console.log(err))
//     console.log("process done")
// })

// function changeColor(time, selector, color){
//     selectorUpd = `.${selector}`
//     let selectedHeading = document.querySelector(selectorUpd)
//     return new Promise((resolve,reject)=>{
//         if (selectedHeading) {
//             setTimeout(() => {
//                 selectedHeading.style.color = color
//                 resolve()
//             }, time)
//         } else 
//             reject ('The element not present in html')
//     })
// }
// Promise to pass the values from first to next promise
// clickMe = document.querySelector(".btn")
// clickMe.addEventListener('click',()=>{
//     let successCount = 0;
//     console.log("Calling first")
//     console.log(`Count : ${successCount}`)
//     changeColor(1000,'first','red',successCount)
//         .then((successCount)=>changeColor(3000,'second','blue',successCount))
//     //    .then((successCount)=>changeColor(3000,'second1','blue',successCount)) This line will end the execution as err came and will go to catch
//     //    .then((successCount)=>changeColor(3000,'second1','blue',successCount).catch((err)=>console.log('selector not available'))) This line will provide the error and then move on. but in the next line there will be an error with counter. 
//         .then((successCount)=>changeColor(2000,'third','green',successCount))
//         .then((successCount)=>console.log(successCount))
//         .catch((err)=>console.log(err))
//     console.log("process done")
// })

// function changeColor(time, selector, color, successCount){
//     selectorUpd = `.${selector}`
//     let selectedHeading = document.querySelector(selectorUpd)
//     return new Promise((resolve,reject)=>{
//         if (selectedHeading) {
//             setTimeout(() => {
//                 selectedHeading.style.color = color
//                 successCount+=1
//                 console.log(color, successCount)
//                 resolve(successCount)
//             }, time)
//         } else 
//             reject ('The element not present in html')
//     })
// }

//============================================================
// Async/Await 
// const users = [
//     {userId: 1, name: "Jinu"},
//     {userId: 2, name: "Prasee"},
//     {userId: 3, name: "Niranjan"},
//     {userId: 4, name: "Neeraj"}
// ]

// const articles = [
//     {userId: 1, articles: ['one','two','three']},
//     {userId: 2, articles: ['four','five','six','seven']},
//     {userId: 3, articles: ['eight','nine']}
// ]

// function getUser(name1){
//     return new Promise((resolve,reject)=>{
//         const user = users.find((user)=>user.name==name1)
//         if(user){
//             resolve(user)
//         }else {
//             reject(`User doesn't exist with name: ${name1}`)
//         }
            
//     })
// }

// function getArticle(userId){
//     return new Promise((resolve,reject)=>{
//         const article = articles.find((user)=>user.userId==userId)
//         if(article){
//             resolve(article)
//         }else {
//             reject(`No article exists for userID `)
//         }
//     }) 
// }
// Getting the articles for the user using .then method
// getUser('Prasee')
//     .then((user)=>getArticle(user.userId))
//     .then((article)=>console.log(article.articles))
//     .catch((err)=>console.log(err))

// Same lines 157 - 160 can be written like below using Async/Await
// async function getData(name){
//     const user=await getUser(name)
//     console.log(user)
//     if (user) {
//         const article = await getArticle(user.userId)
//         console.log(article.articles)
//     }
// }

// Lines 163 - 170 will function as expected, but not able to handle reject cases in promise. Managing error using try catch
// Async Await provides a better way to write code than .then for promises.
// async function getData(name){
//     try {
//         const user=await getUser(name)
//         const article = await getArticle(user.userId)
//         console.log(article.articles)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData('Neeraj')

// Fetch API 

// const url = 'https://www.course-api.com/react-tours-project'
//console.log(fetch(url))
// Getting details using a .then approach
// fetch(url)
//     .then((resp)=>resp.json())
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))

// Getting details using Async Await

// async function fetchUrl(url){
//     try {
//         const resp = await fetch(url)
//         const data = await resp.json()
//         console.log(data)        
//     } catch (error) {
//         console.log(error)
//     }

// }
// Writing Async Await using arrow functions 
// const fetchUrl = async (url)=>{
//     try {
//         const resp=await fetch(url)
//         const data= await resp.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }

// }
// if a return happens return will be also be promise 
// const fetchUrl = async (url)=>{
//     try {
//         const resp=await fetch(url)
//         const data= await resp.json()
//         return data
//     } catch (error) {
//         console.log(error)
//     }

// }
// console.log(fetchUrl(url).then((resp)=>console.log(resp)))

//Fetch Errors 
const url = 'https://www.course-api.com/react-tours-projects'
const fetchUrl = async (url)=>{
    try {
        const resp=await fetch(url)
        const data= await resp.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


btn=document.querySelector(".fetch-tours")
btn.addEventListener('click',()=>{fetchUrl(url)})


