var sum = 0;
process.argv.forEach((val, index) => {
    if(index >1)
        sum = sum +Number( process.argv[index]);
});

console.log(sum);