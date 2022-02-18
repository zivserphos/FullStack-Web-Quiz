"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
// import session from "express-session";
const path_1 = __importDefault(require("path"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_2 = __importDefault(require("./middlewares/morgan"));
const errorHandlers_1 = __importDefault(require("./middlewares/errorHandlers"));
const auth_1 = __importDefault(require("./routes/auth"));
const api_1 = __importDefault(require("./routes/api"));
const email_1 = __importDefault(require("./routes/email"));
require("./utils/config/passport");
const render_1 = __importDefault(require("./middlewares/render"));
const unknownEndpoint_1 = __importDefault(require("./middlewares/unknownEndpoint"));
const tokenExtractor_1 = __importDefault(require("./middlewares/tokenExtractor"));
const userExtractor_1 = __importDefault(require("./middlewares/userExtractor"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(bodyParser.text());
app.use(morgan_2.default, (0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms :body"));
app.use((0, cookie_parser_1.default)("!23"));
app.use((0, cookie_session_1.default)({
    name: "quiz-session",
    keys: ["key1", "key2"],
    maxAge: 4 * 60 * 60 * 100,
    httpOnly: false,
    secure: false,
}));
// app.use(
//   session({
//     secret: "!23",
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       // name: "quiz-session",
//       // keys: ["key1", "key2"],
//       maxAge: 4 * 60 * 60 * 100,
//       httpOnly: false,
//       secure: false,
//     },
//   })
// );
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.static(path_1.default.resolve("./client")));
app.use("/auth", auth_1.default);
app.use("/api", tokenExtractor_1.default, userExtractor_1.default, api_1.default);
app.use("/email", email_1.default);
// app.get("/", (req, res) => {
//   res.render("index", { user: req.user });
// });
app.get("/", render_1.default);
app.get("/sign-up", render_1.default);
app.get("/about", render_1.default);
app.get("/services", render_1.default);
app.get("/contact-us", render_1.default);
app.use(errorHandlers_1.default);
app.use(unknownEndpoint_1.default);
exports.default = app;
