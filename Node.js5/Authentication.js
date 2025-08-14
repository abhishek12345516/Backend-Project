function userAuthentication(req, res, next) {
    console.log('User authentication middleware');
    next();
}

function isAdmin(req, res, next) {
    console.log('Checking if user is admin');
    next();
}

module.exports = {userAuthentication,isAdmin};