const fs = require("fs");

const read  = fs.createReadStream("data.txt", "utf-8");
const write = fs.createWriteStream("data1.txt");
// read.on("data", (chunk) => {
//     // console.log("Chunk Received:", chunk);
//     write.write(chunk);
// });

read.pipe(write);