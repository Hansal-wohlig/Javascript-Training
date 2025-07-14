const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"hansal.bhangale@wohlig.com",
        pass:"hydrogen@1"
    }
})

app.post('/send',async(req,res)=>{
    const {to,subject,message} = req.body
    if(!to||!subject||!message){
        return res.status(400).send("Please fill all the fields")
    }

    try{
        const info = await transporter.sendMail({
            from:"hansal.bhangale@wohlig.com",
            to,
            subject,
            text:message
        })
        console.log('Email sent: %s', info.messageId); // Log success
    res.send(`Email sent successfully to ${to}. Message ID: ${info.messageId}`);
    }catch(e){
        console.log(e)
        res.status(500).send('Error sending email: ' + e.message)
    }
})

app.listen(5000,()=>{
    console.log("Seerver active on port 5000")
})