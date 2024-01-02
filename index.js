//Promise
const myFunc = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('Hello World')
        },2000)
    })
}

