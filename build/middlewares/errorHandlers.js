"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const jwtError = () => ({
    status: 401,
    message: { error: "token missing or invalid" },
});
const errorHandler = (err, _req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => {
    if (err instanceof jsonwebtoken_1.JsonWebTokenError)
        return res.send(jwtError);
    return "status" in err
        ? res.status(err.status).send(err.message)
        : res.status(500).send("internal serverError");
};
exports.default = errorHandler;
