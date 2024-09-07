const setCookie = (res, token, isProduction = false) => {
    res.cookie('authToken', token, {
        httpOnly: true,
        secure: isProduction,
        maxAge: 24 * 60 * 60 * 1000, 
        sameSite: 'Strict'
    });
};

module.exports = setCookie;
