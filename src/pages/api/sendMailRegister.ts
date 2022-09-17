import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import { config } from "../../../config.local";


export default async function sendMailRegister(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let transporter = await nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587,
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
      subject: "FORMULÁRIO VENDA SEU VEÍCULO DO SITE ✔", // Subject line
      text: `${req.body.nome}`, // plain text body
      html: `
      <p> 
          <h2> <strong> Dados Pessoais: </strong>  </h2>
           <h3> 
          <strong> Nome Completo: ${req.body.nome}<br /></strong> 
          </h3>
            <h3>
              <span>Email: ${req.body.email}<br /></span>
              <span>Telefone: ${req.body.telefone}<br /></span>
              <span>Celular: ${req.body.celular}</span>
            </h3>
     </p>

     <p>
        <h2> <strong> Dados do Veículo: </strong>  </h2>
        <strong>Marca: </strong> ${req.body.marca}<br />
        <strong>Modelo: </strong> ${req.body.modelo}<br />
        <strong>Versão: </strong> ${req.body.versao}<br />
        <strong>Cor: </strong> ${req.body.cor}<br />
        <strong>KM: </strong> ${req.body.km}<br />
        <strong>Acessórios: </strong> ${req.body.acessorios}<br />
        <strong>Ano / Modelo: </strong> ${req.body.ano}<br />
        <strong>Placa:</strong> ${req.body.placa}<br />
        <strong>Opcionais: </strong> ${req.body.opcionais}<br />
        <strong>Unico Dono: </strong> ${req.body.unicoDono}<br />
        <strong>O veículo já foi recuperado de roubo: </strong> ${req.body.veiculoRoubo}<br />
        <strong>Seu veículo possui algum detalhe que deveriamos saber: </strong> ${req.body.observacao}<br />
     </p>

     `, // html body
    })
    .then((response: any) => {
      res.send(response);
    })
    .catch((error: any) => {
      res.send(error);
    });
}
