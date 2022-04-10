//Built-in-Modules


//OS

/* const os = require('os')

const userInfo = os.version()

console.log(userInfo)
console.log(`This system uptime is: ${os.uptime()}`)
const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS) */




//PATH

/* const path = require('path')
console.log(path.sep)

const filePath = path.join('./context','subfolder','text.txt')
const filePath2 = path.join('/context/','subfolder','text.txt')
console.log(filePath2)
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'context','subfolder','text.txt')

console.log(absolute) */




//FS

//Sync approach
/* const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./context/first.txt', 'utf-8')
const second = readFileSync('./context/second.txt', 'utf-8')
console.log(first, second)

writeFileSync('./context/third.txt', `Hello this is the third text file after: ${first} and ${second}`)
const third = readFileSync('./context/third.txt', 'utf-8')
console.log(third) */

//Async approach
/* const {readFile, writeFile, copyFileSync} = require('fs')

readFile('./context/first.txt','utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./context/second.txt','utf-8',(err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./context/async.txt', `This is the third file after ${first} & ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
}) */

//HTTP

/* const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to the superstar homepage')
    }
    if(req.url === '/about'){
        res.end('This is about the superstar')
    }
    res.end(`
        <h1>Oops!</h1>
        <h3>page not found</h3>
        <a href='/'>Back Home</a>
    `)
})

server.listen(5000) */