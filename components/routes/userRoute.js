"use strict";

exports = module.exports = function(User) {
    function listUsers(request, response) {
        console.log(User);
        User.findAll((error, users) => {
            if (error) { 
                console.error(error);
                response.status(503)
                    .json({ error: 'service unavailable.' });
            } else {
                response.send(users);
            }
        });
    }
    return listUsers;
}

exports['@require'] = [ '../repository/user' ];