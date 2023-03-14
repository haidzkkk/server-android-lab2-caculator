var http = require('http');
var express = require('express')
var url = require('url');
var fs = require('fs')
var cal = require('./caculater')

http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true)
  if(parsedUrl.pathname === "/"){
    fs.readFile('index.html', function(err, data){
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    })

  }
  else if(parsedUrl.pathname === "/maytinh" ){
    const query = parsedUrl.query
    const a = parseFloat(query.a)
    const b = parseFloat(query.b)
    const toantu = query.toantu
    let ketqua = 0

    console.log(`a = ${a} b = ${b} toantu = ${toantu}`)

    switch(toantu){
      case 'cong':
        ketqua = cal.cong(a,b)
        break
      case 'tru':
        ketqua = cal.tru(a,b)
        break
      case 'nhan':
        ketqua = cal.nhan(a,b)
        break
      case 'chia':
        ketqua = cal.chia(a,b)
        break
      default:
        ketqua = "404 Not Found";
          break;
    }
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(`<p>Ket qua: ${ketqua}</p>`)
    return res.end();
  }
  else{
    res.write("404 Not Found");
    return res.end();
  }
}).listen(8080);        // 8000 3000 3030 8080


// var http = require('http');
// var express = require('express')
// var url = require('url');
// var fs = require('fs')
// var cal = require('./caculater')

// http.createServer(function (req, res) {
//   const parsedUrl = url.parse(req.url, true)
//   if(parsedUrl.pathname === "/"){
//     fs.readFile('index.html', function(err, data){
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     })
//   }
//   else if(parsedUrl.pathname === "/maytinh" ){
//     const query = parsedUrl.query
//     const a = parseFloat(query.a)
//     const b = parseFloat(query.b)
//     const toantu = query.toantu
//     let ketqua = 0

//     console.log(`a = ${a} b = ${b} toantu = ${toantu}`)

//     switch(toantu){
//       case 'cong':
//         ketqua = cal.cong(a,b)
//         break
//       case 'tru':
//         ketqua = cal.tru(a,b)
//         break
//       case 'nhan':
//         ketqua = cal.nhan(a,b)
//         break
//       case 'chia':
//         ketqua = cal.chia(a,b)
//         break
//       default:
//         ketqua = "404 Not Found";
//           break;
//     }
//     res.writeHead(200, {"Content-Type": "text/html"})
//     res.write(`<p>Ket qua: ${ketqua}</p>`)
//     return res.end();
//   }
//   else{
//     res.write("404 Not Found");
//     return res.end();
//   }
// }).listen(8080);        // 8000 3000 3030 8080



