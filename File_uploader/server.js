const express = require("express")
const multer = require('multer')
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,'public')))

const storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'uploads/'),
    filename:(req,file,cb)=>cb(null,file.originalname)
})


const upload = multer({storage})

app.post('/upload',upload.single('myFile'),(req,res)=>{
    if(!req.file) return res.status(400).send("No file found")
    res.send(`File ${req.file.originalname} uploaded successfully`)


})

app.post('/upload-multiple', upload.array('myFiles', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded.');
  }
  const uploaded = req.files.map(f => f.originalname).join(', ');
  res.send(`Uploaded files: ${uploaded}`);
});


app.listen(5000,()=>{
    console.log("Server listening to the port 5000")
})