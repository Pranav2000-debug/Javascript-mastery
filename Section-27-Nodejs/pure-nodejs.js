const http = require("http");

const server = http.createServer((request, resposnse) => {
  let body = [];
  // console.log(request.method, request.url);
  request.on("data", (chunk) => {
    body.push(chunk);
    console.log(chunk);
  });
  request.on("end", () => {
    // event for when we are done receiving/reading in the request 'end'
    body = Buffer.concat(body).toString(); // coverting the data chunks to readable string data
    console.log(body);
    let username = "unkown user"
    if(body) {
        username = body.split("=")[1];
    }
    resposnse.setHeader("Content-type", "text/html"); // sending back response with Headers
    resposnse.write(
     `<h2>Hi ${username}</h2><form method="POST" action="/"><input name="username" type="text"><button type="submit">SEND</button></form>`
    ); // sending back the response
    resposnse.end();
  });
});
server.listen(3000);
