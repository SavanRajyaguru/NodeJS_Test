const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
// const util = require("util");

/// ------ start fs sync module -------

const first = readFileSync("./test1/first.txt", "utf-8");
const second = readFileSync("./test1/test2/second.txt", "utf-8");

writeFileSync("./test1/result.txt", `HERE is the result: ${first} ${second}`, {
  flag: "a",
});

// console.log(first);
// console.log(second);

/// ------ end fs sync module -------

/// ------ start fs async module -------
readFile("./test1/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./test1/test2/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./test1/result-async.txt",
      `Hear is the RESULT: \n${first}\n${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

/// ------ end fs async module -------

/// ------- start fs demo with promise ---------

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    const data = await readFile("./test1/first.txt", "utf-8");
    await writeFile("./test1/result.txt", `This is DEMO: ${data}`);
    const result = await readFile("./test1/result.txt", "utf-8");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
start();

// getText("./test1/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/// ---------- end fs demo with promise -----------
