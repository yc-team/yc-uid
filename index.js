'use strict';

var crypto = require('crypto');

function urlReady(str) {
    return str.replace(/\+/g, '_').replace(/\//g, '-');
}

module.exports = function(length, callback){
    var ratio = Math.log(64) / Math.log(256);

    var numbytes = Math.ceil(length * ratio);

    if (callback) {
        crypto.randomBytes(numbytes, function(err, bytes){
            if (err) {
                callback(err);
            }

            callback(null, urlReady(bytes.toString('base64').slice(0, length)));
        });
    } else {
        return urlReady(crypto.randomBytes(numbytes).toString('base64').slice(0, length));
    }
   

};