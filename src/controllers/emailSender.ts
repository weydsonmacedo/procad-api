import { Request, Response } from "express";
import { Mail } from "../types/input/Email";
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';

export async function sendEmail(req: Request, res: Response) {
    const mailOptions: Mail = req.body;
const emailContent: string = fs.readFileSync('d:/projects/procad-api/src/email-template.txt', 'utf-8');
mailOptions.html = emailContent;
mailOptions.subject = `PROCAD - RELATÓRIO DE ENVIO DE PROGREÇÃO ACADÊMICA`;

    // Configuração do transporte do e-mail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'procadufba@gmail.com',
        pass: 'qkhfgueosusysowy'
    }
});

// Envio do e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
        return res.status(200).send("EMAIL ENVIADO COM SUCESSO");
       
    }
});
}
