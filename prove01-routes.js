// Array that contains the users, more can be added
var users = ['User 1', 'User 2'];

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>CSE341 Prove</title></head>');
    res.write('<body><h1>Hello NodeJs World</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>CSE341 Prove</title></head>');
    res.write(
      '<body><h1>Dummy Users</h1></body>'
    );
    res.write('<ul>');

    // Display the list of users
    for (let index = 0; index < users.length; index++) {
        res.write('<li>');
        res.write(users[index]);
        res.write('</li>');
    }

    res.write('</ul>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      
      // Saves the user in the array of users
      users.push(user);

      // Displays the input to the console
      console.log(user);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }

};

exports.handler = requestHandler;