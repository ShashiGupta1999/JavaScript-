fetch('https://jsonplaceholder.typicode.com/users')
.then((strongFoundation)=> console.log(strongFoundation))
.catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ return response.json()})
.then((data)=> {console.log(data);})
.catch()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ return response.json()})
.then((data)=> {console.log(data[0].user);})
.catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ 
    return response.json()
})
.then((data)=> {    
    if (data[0].username){
        console.log(data[0].username);
    }else{
        return new Error(' Some Challenging in Data fetch ');
    }
})
.catch((err)=>{
    console.log(' Challenge = ', err);
})


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ 
    return response.json()
})
.then((data)=> {    
    if (data[0].user){
        console.log(data[0].username);
    }else{
        console.log(' Some Challenge in Code ');
    }
})
.catch((err)=>{
    console.log(' Challenge = ', err);
})


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ 
    return response.json()
})
.then((data)=> {    
    if (data[0].user){
        console.log(data[0].username);
    }else{
        throw new Error(' Some Challenge in Code ');
    }
})
.catch((err)=>{
    console.log(' Challenge = ', err);
})

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ 
    return response.json()
})
.then((data)=> {    
    if (data[0].user){
        console.log(data[0].username);
    }else{
        throw new Error(' Some Challenge in Code ');
    }
})
.catch((err)=>{
    console.log(' Challenge = ', err.message);
})

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ 
    return response.json()
})
.then((data)=> {    
    if (data[0].user){
        console.log(data[0].username);
    }else{
        throw new Error(' Some Challenge in Code ');
    }
})
.catch((err)=>{
    console.log(' Challenge = ', err.name);
})

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{ 
    return response.json()
})
.then((data)=> {    
    if (data[0].user){
        console.log(data[0].username);
    }else{
        throw new Error(' Some Challenge in Code ');
    }
})
.catch((err)=>{
    console.log(' Challenge = ', err.trace);
})
