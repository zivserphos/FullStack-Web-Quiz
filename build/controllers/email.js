"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../utils/config"));
const transport = nodemailer_1.default.createTransport({
    port: 587,
    host: "smtp.outlook.com",
    service: "Outlook365",
    secure: false,
    auth: {
        user: config_1.default.z_s_email,
        pass: config_1.default.z_s_password,
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
});
const sendEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, message } = req.body;
        console.log(name, email, message);
        const options = {
            from: config_1.default.z_s_email,
            to: "zivfromisrael@gmail.com",
            subject: "Z.S INC. NEW MAIL",
            text: `message sent by: ${name} from ${email}: \r\n ${message}`,
        };
        yield transport
            .sendMail(options)
            .then(() => res.send("ok"))
            .catch((e) => res.send(`email could not send succesfully:${e}`));
    }
    catch (err) {
        next({ status: 400, message: { error: "Could not get message data" } });
    }
});
exports.default = sendEmail;
// import { Handler } from "express";
// import nodemailer from "nodemailer";
// import smtpTransport from "nodemailer-smtp-transport";
// import config from "../utils/config";
// const transport = nodemailer.createTransport(
//   smtpTransport({
//     port: 587,
//     host: "smtp.gmail.com",
//     service: "gmail",
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: config.z_s_email,
//       pass: config.z_s_password,
//     },
//     tls: {
//       ciphers: "SSLv3",
//       rejectUnauthorized: false,
//     },
//   })
// );
// const sendEmail: Handler = async (req, res, next) => {
//   try {
//     const { name, email, message } = req.body;
//     console.log(name, email, message);
//     const options = {
//       from: config.z_s_email,
//       to: "zivfromisrael@gmail.com",
//       subject: "Z.S INC. NEW MAIL",
//       message: `message sent by: ${name} from ${email}: \r\n ${message}`,
//     };
//     await transport
//       .sendMail(options)
//       .then(() => res.send("ok"))
//       .catch((e) => res.send(`email could not send succesfully:${e}`));
//   } catch (err) {
//     next({ status: 400, message: { error: "Could not get message data" } });
//   }
// };
// export default sendEmail;
