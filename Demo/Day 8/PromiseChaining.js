const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        const myName = "Magesh Babu";
        if (myName) {
            resolve(myName);
        }
        else {
            reject(new Error(" Assign Value to myName "));
        }
    }, 3000);
});


function funUserDetails(name) {
    const userDetails = new Promise((resolve,reject) => {
        setTimeout(() => {
            let userInfo = [{ name: 'Magesh Babu', age: 48 }];
            let userAge = userInfo.find((user) => user.name === name);
            if (userAge) {
                resolve(userAge);
            }
            else {
                reject(new Error(" OOPS Check the Info "));

            }
        },3000);
    });
    return userDetails;
}


data.then((sucResponse) => {
    funUserDetails(sucResponse).then((userInfo) => console.log(userInfo))
}).catch((challengeInRequest) => {
    console.log(challengeInRequest);
}).finally(() => {
    console.log(' End of Execution ');
});

