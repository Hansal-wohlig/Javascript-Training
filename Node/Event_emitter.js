const event_emitter = require('events')
const { EventEmitter } = require('stream')

const customEmitter = new EventEmitter()


//here order of execution matters
customEmitter.on('response',(name,id)=>{
    console.log(`data received with name ${name} and id ${id}`)
})

customEmitter.on('response',()=>{
    console.log("some other logic here")
})

customEmitter.emit('response', "john",34)


//Setting up sever using Event emitter

const http = require('http')

const server =  http.createServer()

server.on('request', (req,res)=>{
    res.end("Welcome to our server")
})

server.listen(5000)