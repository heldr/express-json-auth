express-json-auth
=================

Run express basic http auth from a user json file.

```CLI
npm install express-json-auth --save
```

## Usage example:

User.json
```js
{
	"ted": "123321",
	"bear": "123456"
}
```

Server.js
```js
var app  = require('express')(),
	auth = require('express-json-auth')(); // default path: process cwd dir + user.json

// throughout the app
app.use(auth);

// through a route
app.get('/admin', auth, function (req, res) {
	res.send('Logged!');
});
```

### Specific json
```js
...
auth = require('express-json-auth')('./private/admin.json');
...
```

### Object
```js
...
users = {
	"ted": "123321",
	"bear": "123456"
},
auth  = require('express-json-auth').plain(users);
...
```

## Release notes
* 0.0.1 - First release - Basic auth from a json

## License

MIT License
(c) [Helder Santana](http://git.io/heldr)
