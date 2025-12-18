// require('./about');
// require('./main');

// let addNum=require('./about')
// const randomNumber=require('random-prime').randomPrime
// console.log(addNum(15,19))
// const primNumber=require('prime-cort-nums').primeNumber

// let fruit='Apple'
// let nums=[5,6,9,7,4,5,]
// console.log(fruit)
// console.log(nums)
// primNumber(17)

// const path=require('path')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))

// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))

// const os=require('os')
// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.hostname())
// console.log(os.uptime())
// console.log(os.version())

// File System
// const fs=require('fs')
// const path=require('path')

// fs.readFile('./apple/index.html','utf-8',(err,data)=>{
//     if(err) throw new Error 
    
//     // console.log(Buffer.from(data).toString())
//     console.log(data)
// })





// const {readFile}=require('fs')
// console.log(fs)


// fs.readFile('./pro/text.txt','utf-8',(err,data)=>{
//     // console.log(err)
//     if(err) throw new Error
    
//     console.log(data)
// })
// fs.readFileSync('./pro/text.txt','utf-8',(err,data)=>{
//     // console.log(err)
//     if(err) throw new Error
    
//     console.log(data)
// })
// console.log(fs)


// const http=require('http')
// let server=http.createServer((request,response)=>{
//     // console.log(request.url)
//     // console.log(response)
//     response.write('<div><h1>Node 2024-2025-2026 Backend</h1></div>')
//     response.end()
// })

// server.listen(5000,()=>{
//     console.log('Server is running')
// })


const http=require('http')
let server=http.createServer((req,res)=>{
//   res.write('Hello Node 2025-2026-2027')
//   res.end()
// if(req.method=="GET"){
//     res.end(`
//           <h1>Hello</h1>
//        <form action="" method="post">
//            <input type="email" placeholder="Email" name="" id="">
//            <button type="submit">Send</button>
//        </form>
//        `) 
       
// }else if(req.method==='POST'){
//     res.end(`
//         <h1>Successfully data</h1>
//         `)
// }
if (req.method === 'GET') {
    if(req.url==='/api/user'){
        let user={
            name:'Max',
            email:'max@gamil.com',
            tel:123456,
            city:'London',
            age:29
        }
        res.end(JSON.stringify(user))
    }
}
})
server.listen(3700,()=>{console.log('Server is running')})