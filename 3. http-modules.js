const http = require('http')
//create a server. accept the request and print the response
// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.write('Hello welcome to our first website')
//     res.end()
// })
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === '/'){
        res.end(`<p>Hello welcome to our first website</p> <a href="/about">About</a>`)
    }else if(req.url === '/about'){
        res.end(`<p>Hello welcome to about page</p> <a href="/">Home</a>`)
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `)
    }
})


//server will listen to port 8000
server.listen(8000)