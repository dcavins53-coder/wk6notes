"use strict";
const option ={
    body: JSON.stringify({name: "jane", grade: 11, district: "Seattle HS"}),
    header: {},
    method:"POST"
}
async function fetchData(url, options){
    console.log(option)
    console.log("end option line")
    try {
    const res = await fetch(url, options)
    if res (!res.ok){
        throw new Error("Something went wrong in fetch")//go to the catch block
    } 
    
      const data = await res.json()
       return data
     } catch (error) {  
      console.error(error)
    }
}



async function main(){
    try {
        const data= await fetchData()
    } catch (error) {
        console error(error)
    }
}
    
}
    
}