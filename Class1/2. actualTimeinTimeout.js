
let currTime = Date.now();
let afterTime=0;

function calcTime(afterTime, currTime){
    console.log(afterTime-currTime);
}

const timer = setTimeout((cb) =>{ 
    afterTime = Date.now();
    cb(afterTime, currTime);
}, 1000);

timer();

// function timer()  {
//     return new Promise((res) => {
//         setTimeout((cb) =>{ 
//             res(Date.now());    
//         }, 1000);
//     });
// }
// timer().then(afterTime  => {
//     console.log((afterTime-currTime)/1000);
// });


async function ActualTime(currTime, timer){
    const actT = await timer;
    return (actT-currTime)/100;
}

ActualTime(currTime, afterTime).then(ans => {
    console.log(ans);
});
