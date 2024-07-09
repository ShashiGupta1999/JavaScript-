const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const myName = undefined;
       if (myName){
         resolve(myName);
       }
       else{
         reject(" Assign Value to myName ");
       }
    },3000);
 });

 data.then((response)=>{
    console.log(' response = ' + response);
 }).catch((err)=>{
    console.log(' Some Challenge = ' + err);
 });