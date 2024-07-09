/* Creating a Promise */
const refPromise = new Promise((res,rej)=>{
   setTimeout(()=>{
     let myName = 'Magesh Babu';
     if (myName){
        res(myName);
     }
     else{
        rej('Vaiable without initialization');
     }
   },3000);
});

/* To invoke Promise */
refPromise
.then((data)=>{
    console.log(" myName  = " + data);
})
.catch((challenge)=>{
    console.log(' Execution Challenge = ' + challenge);
})
.finally(()=>{
    console.log(' Happy Weekend ');
})

console.log(' Enjoy the Weekend ');



/*
const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const myName = "Magesh Babu";
       if (myName){
         resolve(myName);
       }
       else{
         reject(new Error(" Assign Value to myName "));
       }
    },3000);
 });

 data.then((response)=>{
    console.log(' response = ' + response);
 }).catch((err)=>{
    console.log(' Some Challenge = ' + err);
 });
 */