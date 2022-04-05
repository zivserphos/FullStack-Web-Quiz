"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtError = () => ({
    status: 401,
    message: { error: "token missing or invalid" },
});
const tokenExtractor = (req, _res, next) => {
    const authorization = req.get("authorization");
    console.log(authorization);
    if (!authorization || !authorization.toLowerCase().startsWith("bearer "))
        throw jwtError();
    req.token = authorization.substring(7);
    next();
};
exports.default = tokenExtractor;
