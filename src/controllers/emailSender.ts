import { Request, Response } from "express";
import { Mail } from "../types/input/Email";
import * as nodemailer from 'nodemailer';


export async function sendEmail(req: Request, res: Response) {
    const mailOptions: Mail = req.body;

    // Configuração do transporte do e-mail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'procadufba@gmail.com',
        pass: 'procad@2023'
    }
});

// Envio do e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});
return res.status(200).send("");

}