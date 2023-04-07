const { readFile, writeFile } = require("fs");
const path = require("path");
const mammoth = require("mammoth");

const filePath = path.resolve(`${__dirname}/test1/file-sample_1MB.docx`);
console.log(filePath);

// mammoth
//   .extractRawText({ path: filePath })
//   .then((result) => {
//     const text = result.value;
//     console.log("TEXT>>>>>>>", text);

//     writeFile(filePath, `${text}:this is demo`, (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//     });
//     console.log("NEWTEXT>>>>>>>", text);
//   })
//   .catch((err) => console.log("ERROR>>>>>>>>>", err));
const data = mammoth
  .convertToHtml({ path: filePath })
  .then((result) => {
    const html = result.value;
    console.log(html);
    writeFile(filePath, `${html}:this is demo1`, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });
