const express= require('express')
const path = require('path')
const app = express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:false}))


app.get('/',(req, res)=>{
    res.render('form')
})

app.post('/submit',(req,res)=>{
    res.render('result',{formData:req.body})
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})