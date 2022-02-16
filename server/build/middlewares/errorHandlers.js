"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => {
    console.log(err);
    return "status" in err
        ? res.status(err.status).send(err.message)
        : res.status(500).send("internal serverError");
};
exports.default = errorHandler;
