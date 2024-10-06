const setCookie = (res, token, isProduction = false) => {
    console.log('Setting Cookie:', token);  
    res.cookie('authToken', token, {
        httpOnly: true,
        secure: isProduction,
        maxAge: 24 * 60 * 60 * 1000,  
        sameSite: 'Strict'
    });
};

module.exports = setCookie;
