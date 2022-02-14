"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.logout = void 0;
const logout = (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    req.session = null;
    req.logout();
    res.redirect("/sign-up");
};
exports.logout = logout;
const signIn = (_req, res) => res.redirect("/");
exports.signIn = signIn;
