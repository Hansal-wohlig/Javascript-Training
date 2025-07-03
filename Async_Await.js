function getData(dataId){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
      console.log("data",dataId)
      resolve(dataId) // can also use reject(dataId)

  }, 2000)
    })

}


async function getFinalData(){
    console.log("Getting data 1")
    await getData(1)
    console.log("Getting data 2")
    await getData(2)
    console.log("Getting data 3")   
    await getData(3)
}

getFinalData()