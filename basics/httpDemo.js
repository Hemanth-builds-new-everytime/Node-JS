const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {

    const log = `\n${req.url}  : ${req.method}`;
    fs.appendFile("newFile.txt", log, (err, data) =>  {

        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }

    })

    res.end("<h1>Hello World!</h1>");
});



const PORT = 3000;

server.listen(PORT, () => {
    console.log('HEllo');
})

