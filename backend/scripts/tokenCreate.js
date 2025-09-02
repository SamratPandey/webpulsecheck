//JWT_SECURATE token creation
const crypto = require('crypto');
const secrateCode = () =>{
    console.log(crypto.randomBytes(64).toString('hex'));
}

secrateCode();