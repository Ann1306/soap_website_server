
const http = require("http");
const fs = require('fs');
const path = require('path');

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
    if(err) {
    res.writeHead(3000, { 'Content-type': 'text/plain' })
    return res.end('500 — Внутренняя ошибка')
    }
    res.writeHead(responseCode, { 'Content-type': contentType })
    res.end(data)
    })
}

const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
    case '':
        serveStaticFile(res, '/public/index.html', 'text/html; charset=UTF-8')
    break
    case '/script.js':
        serveStaticFile(res, '/public/script.js', 'text/js; charset=UTF-8')
    break
    case '/style.css':
        serveStaticFile(res, '/public/style.css', 'text/css; charset=UTF-8')
    break
    case '/good1.jpeg':
        serveStaticFile(res, '/public/good1.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good2.jpeg':
        serveStaticFile(res, '/public/good2.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good3.jpeg':
        serveStaticFile(res, '/public/good3.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good4.jpeg':
        serveStaticFile(res, '/public/good4.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good5.jpeg':
        serveStaticFile(res, '/public/good5.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good6.jpeg':
        serveStaticFile(res, '/public/good6.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good7.jpeg':
        serveStaticFile(res, '/public/good7.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good8.jpeg':
        serveStaticFile(res, '/public/good8.jpeg', 'text/html; charset=UTF-8')
    break
    case '/good9.jpg':
        serveStaticFile(res, '/public/good9.jpg', 'text/html; charset=UTF-8')
    break
    case '/soap.png':
        serveStaticFile(res, '/public/soap.png', 'text/html; charset=UTF-8')
    break
    case '/soap1.png':
        serveStaticFile(res, '/public/soap1.png', 'text/html; charset=UTF-8')
    break
    case '/soap2.png':
        serveStaticFile(res, '/public/soap2.png', 'text/html; charset=UTF-8')
    break
    case '/soap3.png':
        serveStaticFile(res, '/public/soap3.png', 'text/html; charset=UTF-8')
    break
    case '/soap4.png':
        serveStaticFile(res, '/public/soap4.png', 'text/html; charset=UTF-8')
    break
    case '/soap5.png':
        serveStaticFile(res, '/public/soap5.png', 'text/html; charset=UTF-8')
    break
    case '/icq.png':
        serveStaticFile(res, '/public/icq.png', 'text/html; charset=UTF-8')
    break
    case '/tg.png':
        serveStaticFile(res, '/public/tg.png', 'text/html; charset=UTF-8')
    break
    case '/viber.png':
        serveStaticFile(res, '/public/viber.png', 'text/html; charset=UTF-8')
    break
    case '/images3.jpg':
        serveStaticFile(res, '/public/images3.jpg', 'text/html; charset=UTF-8')
    break
    case '/index2.html':
        serveStaticFile(res, '/public/index2.html', 'text/html; charset=UTF-8')
    break
    case '/index3.html':
        serveStaticFile(res, '/public/index3.html', 'text/html; charset=UTF-8')
    break
    case '/index4.html':
        serveStaticFile(res, '/public/index4.html', 'text/html; charset=UTF-8')
    break
    case '/index5.html':
        serveStaticFile(res, '/public/index5.html', 'text/html; charset=UTF-8')
    break
    case '/index6.html':
        serveStaticFile(res, '/public/index6.html', 'text/html; charset=UTF-8')
    break
    case '/index7.html':
        serveStaticFile(res, '/public/index7.html', 'text/html; charset=UTF-8')
    break
    case '/style2.css':
        serveStaticFile (res, '/public/style2.css', 'text/css; charset=UTF-8')
    break
    default:
        res.writeHead(404, { 'Content-Type': "text/plain; charset=UTF-8" })
        res.end('Ошибка 404')
    break
    }
})
server.listen(80, "127.0.0.1", () => {
  const info = server.address();
  console.log(`Сервер запущен ${info}`);
});
