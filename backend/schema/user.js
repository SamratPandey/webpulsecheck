const zod = require('zod');

const userSchema = zod.object({
    username: zod.string().min(3).max(30),
    email: zod.string().email(),
    password: zod.string().min(6)
});

module.exports = userSchema;
