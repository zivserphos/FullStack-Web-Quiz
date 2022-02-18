"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownEndPoint = (_req, res, next) => {
    res.redirect("/");
    next();
};
exports.default = unknownEndPoint;
