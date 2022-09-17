import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import { config } from "../../../config.local";

export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let transporter = await nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: config.USERMAIL,
      pass: config.PASSMAIL,
    },
  });

  // Step 2

  await transporter
    .sendMail({
      from: `<${config.USERMAIL}>`, // sender address
      to: "antonio.luiz0212@hotmail.com", // list of receivers
      // replyTo: `${req.body.email}`,
      subject: "CONTADO DO SITE ✔", // Subject line
      text: `${req.body.nome}`, // plain text body
      html: `
    <strong>Nome:</strong> ${req.body.nome}<br />
    <strong>Telefone:</strong>${req.body.telefone}<br />
    <strong>Email:</strong>${req.body.email}<br />
    <p>
    <strong>Mensagem:</strong>${req.body.mensagem}
    <p>`, // html body
    })
    .then((response: any) => {
      res.send(response);
    })
    .catch((error: any) => {
      res.send(error);
    });
}
