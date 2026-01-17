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


// const http=require('http')
// let server=http.createServer((req,res)=>{
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
// if (req.method === 'GET') {
//     if(req.url==='/api/user'){
//         let cars = [
//             {
//                 model: "Cobalt",
//                 price: "150 mln",
//                 year: "2025",
//                 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULrWIVr1lgNZZZBdO2_sAPstB06U1Pzvpvg&s"
//             },
//             {
//                 model: "Gentra",
//                 price: "140 mln",
//                 year: "2025",
//                 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfqCATV9tKkndgsi-yJaqTdQMFkosZMkT4A&s"
//             },
//             {
//                 model: "Malibu",
//                 price: "380 mln",
//                 year: "2025",
//                 image: "https://lionmotors.uz/wp-content/uploads/2020/11/malibuwhite2.jpg"
//             },
//             {
//                 model: "Tesla",
//                 price: "400 mln",
//                 year: "2025",
//                 image: "https://t3.ftcdn.net/jpg/04/91/22/94/360_F_491229401_k7y8Cbbw1zzsOBL2PURD2fM1R84fGoh8.jpg"
//             }
//         ]
//         res.writeHead(200, {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         })
//         res.end(JSON.stringify(cars))
//     }
// }
// })
// server.listen(3700,()=>{console.log('Server is running')})


const express=require('express')
const path=require('path')
const Joi=require('joi')
const app=express()
app.use(express.json())
let port=4700

const cars=[
    {id:1,title:'Tesla'},
    {id:2,title:'BMW'},
    {id:3,title:'KIA'},
    {id:4,title:'BYD'}
]
app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'))

// app.get('/',(req,res)=>{
//     res.send('Hello worlds')
// })
// app.get('/about',(req,res)=>{
//     res.send('About Section')
// })
// app.get('/api/cars',(req,res)=>{
//     res.send(cars)
// })

// app.post('/api/cars',(req,res)=>{
//     const carSchema=Joi.object({
//         name:Joi.string().required().min(4).max(7).lowercase().uppercase()        
//     })

//     let result=carSchema.validate(req.body)
//     if(result.error){
//         res.status(400).send(result.error.details[0].message)
//         return
//     }
//     let car={
//         id:cars.length+1,
//         title:req.body.name
//     }
//     cars.push(car)
//     res.status(201).send(car)
// })

// app.put('/api/cars/:id',(req,res)=>{
//     let car=cars.find(item=>item.id==req.params.id)
    
//     const carSchema=Joi.object({
//         name:Joi.string().required().min(3)
//     })
//     let {error}=carSchema.validate(req.body)
    
//     if(error){
//         res.status(400).send(error.details[0].message)  
//     }
//     car.title=req.body.name
//     res.status(201).send(car)
    
// })

// app.delete('/api/cars/:id',(req,res)=>{
//     let car=cars.find(item=>item.id==req.params.id)
//     if(!car){
//         res.status(400).send('This id model not found')
//         return
//     }
//     let carIndex=cars.indexOf(car)
//     cars.splice(carIndex,1)
//     res.send(car)
    
// })
app.get('/',(req,res)=>{
    res.render('index',{
        title:"Pug Engine",
        message:'Learning new Pug 2026',
        comments:"New Node Backend group"
    })
   let list = ["Uno", "Dos", "Tres",
        "Cuatro", "Cinco", "Seis"]
    res.render('index',list)
})

app.listen(port,()=>{
    console.log(`Server is running on ${port} port`)
    
})