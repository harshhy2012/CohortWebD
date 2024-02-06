
let x =10

const timerId =  setInterval(countDown, 1*1000);

function countDown(){
    if(x==0){
        
        clearInterval(timerId);
        return;
    }
    console.log('timerID: '+ timerId + ' | timer: '+x)
    x--;
}

