var http = require('http');

module.exports = {
    lookup: function(ip, cb) {
        var bytes = ip.split('.');
        var request = http.get('http://' + bytes[3] + '.' + bytes[2] + '.' + bytes[1] + '.' + bytes[0] + '.b.barracudacentral.org');

        request.on('error', (error) => {
            if (error.syscall == 'getaddrinfo') {
                cb('false');
            } else if (error.syscall == 'connect') {
                cb('true');
            } else {
                cb('error');
            }
        });

        request.on('end', () => cb('error'));
    },
};
