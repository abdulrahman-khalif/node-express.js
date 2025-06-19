const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyle = fs.readFileSync("./navbar-app/styles.css");
const homepage_logo = fs.readFileSync("./navbar-app/logo.svg");
const homepage_logic = fs.readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about as page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end("");
  }
  // home page style css
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  // home page logo svg
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homepage_logo);
    res.end();
  }

  // home page logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homepage_logic);
    res.end();
  }

  // page not Found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not Found</h1>");
    res.end("<a>Back to Home page</a>");
  }
});

server.listen(5000, () => {
  console.log("server listen on port 5000");
});
