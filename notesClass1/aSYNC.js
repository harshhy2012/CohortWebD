// // callbacks
// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4){
//             callback('could not fetch data\n', undefined);
//         }
//     });
    
//     request.open('GET', resource);
//     request.send();
// };

// console.log(1);
// console.log(2);

// getTodos('todos//todos.json', (err, data) => {
//     console.log(data);
//     getTodos('todos//luigi.json', (err, data) => {
//         console.log(data);
//         getTodos('todos//mario.json', (err, data) => {
//             console.log(data);
//         });
//     });     
// });

// console.log(3);

// console.log(4);

// promises

// const getSomething = () =>{
//     return new Promise((resolve, reject) => {
//        // resolve('some data');
//        reject('some error');
//     });
// }

// getSomething().then( data => {
//     console.log(data)
// }).catch( err => {
//     console.log(err);
// });

const getTodos = (resource) => {
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('could not fetch data\n');
            }
        });

        request.open('GET', resource);
        request.send();
    });
    
};


console.log(1);
console.log(2);

getTodos('todos//todos.json').then((data) => {
    console.log('promise 1 resolved: ', data);
    return getTodos('tod    os//luigi.json');
}).then((data) => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos//mario.json');
}).then( data => {
    console.log('promise 3 resolved: ', data);
}).catch(err=>{
    console.log(err);
});

console.log(3);
console.log(4);