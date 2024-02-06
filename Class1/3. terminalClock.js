
function clock(){
    setInterval(() => {
        let timestamp = new Date();

        let hours, minutes, seconds;
        hours = timestamp.getHours();
        minutes = timestamp.getMinutes();
        seconds = timestamp.getSeconds();
        process.stdout.write(hours+":"+minutes+":"+seconds+'\r');
        //process.stdout.moveCursor(0, -1) // up one line
        //process.stdout.clearLine(1)
    }, 1000);
}

clock();