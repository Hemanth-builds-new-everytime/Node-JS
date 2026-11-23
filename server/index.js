// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const myServer = http.createServer((req, res) => {

//     const pathData = path.join(__dirname, 'staticFiles', 'index.html');

//     fs.readFile(pathData, "utf-8", (err, data) => {
//         switch(req.url) {
//             case "/":
//                 res.writeHead(200, {
//                     "content-type": 'text.html'
//                 })
//             case "/about":
//                 res.writeHead(200, {
//                     "content-type": 'text.html'
//                 })
//         }
//     })


//     if (path.url === 'index') {

//     }

//     console.log(pathData);
//     if (req.url === '/') {

//         fs.readFile(path, "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else { 
//                 res.writeHead(200, {
//                     "content-type": 'text.html'
//                 }); 
//                 res.end(data);
//             }
//         })

//     }

//     else if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'staticFiles', 'about.html'), "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.writeHead(200, {
//                     "content-type": 'text.html'
//                 });
//                 res.end(data);
//             }

//         })
//     }

//     else if (req.url === '/contact') {
//         fs.readFile(path.join(__dirname, 'staticFiles', 'contact.html'), "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.writeHead(200, {
//                     "content-type": 'text.html'
//                 });
//                 res.end(data);
//             }

//         })
//     }


//     switch (req.url) {
//         case '/': 
//     }
// })


// const PORT = 3000;

// myServer.listen(PORT, () => {
//     console.log('server is running');
// })









// optimised code using switch case. 

const http = require("http");
const fs = require("fs");
const path = require("path");

const myServer = http.createServer((req, res) => {

    let filePath;

    switch (req.url) {
        case "/":
            filePath = path.join(__dirname, "staticFiles", "index.html");
            break;

        case "/about":
            filePath = path.join(__dirname, "staticFiles", "about.html");
            break;

        case "/contact":
            filePath = path.join(__dirname, "staticFiles", "contact.html");
            break;

        case "/services":
            filePath = path.join(__dirname, "staticFiles", "services.html");
            break;

        default:

        const notFoundPath = path.join(__dirname, "staticFiles", "404.html");

            fs.readFile(notFoundPath, "utf-8", (err, data) => {

                if (err) {
                    res.writeHead(500, {
                        "content-type": "text/plain"
                    });

                    return res.end("Unable to load 404 page");
                } else {

                    res.writeHead(404, {
                        "Content-Type": "text/html"
                    });

                    res.end(data); 
                }
            })
            return;
    }

    fs.readFile(filePath, "utf-8", (err, data) => {

        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            return res.end("Internal Server Error");
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(data);
    });

});

const PORT = 3000;

myServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


