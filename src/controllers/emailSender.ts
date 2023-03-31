import { Request, Response } from "express";
import { Mail } from "../types/input/Email";
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';


export async function sendEmail(req: Request, res: Response) {

    const userName: string = req.body.userName;
    const mailOptions = req.body.mailSetting;
    const emailContent: string = fs.readFileSync('d:/projects/procad-api/src/email-template.txt', 'utf-8');

    mailOptions.html = emailContent.replace('<variavel>', userName);
    mailOptions.subject = `PROCAD - RELATÓRIO DE ENVIO DE PROGREÇÃO ACADÊMICA`;

    // Configuração do transporte do e-mail
    let transporter = nodemailer.createTransport({
        service: process.env.SMTP_SERVICE,
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
        authMethod: process.env.SMTP_AUTH_METHOD
    });

    // Envio do e-mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('E-mail enviado: ' + info.response);
            return res.status(200).send("EMAIL ENVIADO COM SUCESSO");

        }
    });
}
