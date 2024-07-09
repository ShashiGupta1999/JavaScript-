fetch('https://jsonplaceholder.typicode.com/users',{
    method:"POST",
    headers:{
        'Authorization':'Learned javascript',
        'Content-Type':'application/json'
    },
    body:{
      someInfo: {id:12, name:'Magesh Babu',location:'Chennai', trainer:'Best'}
    }
})
.then((strongFoundation)=> console.log(strongFoundation))
.catch()