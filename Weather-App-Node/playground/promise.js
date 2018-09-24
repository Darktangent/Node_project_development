var asyncAdd=(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a ==='number' && typeof b==='number'){
        resolve(a+b)
      }else {
        reject ('Args must be numbers')
      }
    },1500)
  })
}
asyncAdd(5,7).then((result)=>{
  console.log("result:", result)
  return asyncAdd(result,33)
}).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})
var somePromise= new Promise((resolve,reject)=>{
  setTimeout(()=>{
      //resolve('Hey, it worked')
      reject('unable to fulfil promise')
  },2500)

})
somePromise.then((message)=>{
  console.log('Success',message)
},(error)=>{
  console.log("Error", error)
})
