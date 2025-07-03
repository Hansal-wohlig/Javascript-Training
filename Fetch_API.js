const URL="https://catfact.ninja/fact?max_length=140";

const getFacts= async()=>{
    console.log("Getting Facts...");
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    console.log(data.fact)
}

getFacts() 