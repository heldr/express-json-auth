var express = require('express'),
    path    = require('path'),
    fs      = require('fs');

function JSONAuth(filePath) {
    var userList = null;

    filePath = path.join(process.cwd(), filePath || 'user.json');

    if (!fs.existsSync(filePath)) {
        throw new Error('File ' + filePath + ' not found!');
    }

    userList = require(filePath);

    return JSONAuth.plain(userList);
}

JSONAuth.plain = function (list) {
    return express.basicAuth(function (user, passwd) {
        return list[user] && passwd === list[user];
    });
}

module.exports = JSONAuth;
