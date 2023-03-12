const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request);

  //Enviar header
  // response.writeHead(404);
  // response.writeHead(201, { 'Content-Type': 'text/plain'});
  // response.writeHead(201, { 'Content-Type': 'application/json'});

  response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  response.writeHead(200, { 'Content-Type': 'application/csv'});


  const persona = {
    id: 1,
    nombre: 'Pool'
  }

  // response.write(JSON.stringify(persona)); //Texto plano
  // response.write(JSON.stringify(persona)); //Con JSON
  response.write('Id, Nombre\n');   //Con CSV
  response.write('1, Fernando\n');  //Con CSV
  response.write('2, Gonzalo\n');   //Con CSV
  response.write('3, Pedro\n');     //Con CSV

  response.end();
});

server.listen(8080);

console.log('Escuchando el puerto 8080');