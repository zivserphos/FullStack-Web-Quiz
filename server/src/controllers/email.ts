import { Handler } from "express";
import nodemailer from "nodemailer";
import config from "../utils/config";

const transport = nodemailer.createTransport({
  port: 587,
  host: "smtp.outlook.com",
  service: "Outlook365",
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.z_s_email,
    pass: config.z_s_password,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

const sendEmail: Handler = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    const options = {
      from: config.z_s_email,
      to: "zivfromisrael@gmail.com",
      subject: "Z.S INC. NEW MAIL",
      text: `message sent by: ${name} from ${email}: \r\n ${message}`,
    };
    await transport
      .sendMail(options)
      .then(() => res.send("ok"))
      .catch((e) => res.send(`email could not send succesfully:${e}`));
  } catch (err) {
    next({ status: 400, message: { error: "Could not get message data" } });
  }
};

export default sendEmail;

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
