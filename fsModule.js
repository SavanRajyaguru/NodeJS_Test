const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

/// ------ start fs sync module ------- 

const first = readFileSync('./test1/first.txt', 'utf-8');
const second = readFileSync('./test1/test2/second.txt', 'utf-8');

writeFileSync('./test1/result.txt', `HERE is the result: ${first} ${second}`,
    {flag: 'a'}
)

// console.log(first);
// console.log(second);

/// ------ end fs sync module ------- 

/// ------ start fs async module ------- 
readFile('./test1/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./test1/test2/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./test1/result-async.txt', 
        `Hear is the RESULT: \n${first}\n${second}`, 
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        }
        )
    })
})

/// ------ end fs async module ------- 