import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import { config } from "../../../config.local";

export default async function sendMailProposal(
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
      <h2>Proposta<br/></h2>
      <h2><strong>Carro: ${req.body.car}<br/> </h2>

    <strong>Nome: </strong> ${req.body.nome}<br />
    <strong>Telefone: </strong>${req.body.telefone}<br />
    <strong>Email: </strong>${req.body.email}<br />
    <p>
    <strong>Mensagem: </strong>${req.body.mensagem}
    <p>
    <strong>Quero Finaciar: </strong>${req.body.finaciar}<br />
    <strong>Quero dar veículo na troca: </strong>${req.body.darVeiculoNaTroca}<br />
    <strong>Quero dar receber aviso e promoções: </strong>${req.body.promocoes}<br />
    <strong>Lí e concordo com a política de privacidade: </strong>${req.body.politicaPrivacidade}<br />

    `, // html body
    })
    .then((response: any) => {
      res.send(response);
    })
    .catch((error: any) => {
      res.send(error);
    });
}
