const { clear } = require('console')

const {readFile, writeFile} = require('fs').promises

const start =async()=>{
    try{
        const first  =  await readFile("./Built_In_Modules/content/first.txt","utf8")
        const second = await readFile("./Built_In_Modules/content/second.txt","utf8")
        await writeFile("./Built_In_Modules/content/result-async-await.txt",`Here is the result : ${first}, ${second}`)
        console.log(first,second)

    }catch(error){
        console.log(error)
    }
}


start()