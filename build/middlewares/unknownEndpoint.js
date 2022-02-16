"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownEndPoint = (_req, res, next) => {
    res.redirect("/");
    // res.status(404).json({ error: "Unknown endpoint" });
    next();
};
exports.default = unknownEndPoint;
