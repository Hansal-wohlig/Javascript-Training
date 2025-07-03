function getData(dataId){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
      console.log("data",dataId)
      resolve(dataId) // can also use reject(dataId)

  }, 2000)
    })

}

let promis = getData(123)
console.log(promis)

promis.then((res)=>{
    console.log("Promis fullfilled for id", res)
})

promis.catch((err)=>{
    console.log("Promise rejected for the id", err)
})


console.log("Promise chaining")

getData(1).then((res)=>{
    return getData(2)
}).then((res)=>{
    return getData(3)
}).then((res)=>{
    console.log("success")
})