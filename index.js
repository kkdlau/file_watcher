const fs = require('fs');
const { exec } = require('child_process');

// require('log-timestamp');

const fileToWatch = './F429_Coreboard.elf';

console.log('watching ' + fileToWatch);

fs.watchFile(fileToWatch, (cur, prev) => {
    // console.log(fileToWatch + ' has changed!');
    // console.log('start flashin code!')
    exec("bash ./flash.sh", (err, stdout, stderr) => {
        console.log(stdout);
        console.error(stderr);
    });
});