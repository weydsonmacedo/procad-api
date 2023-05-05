import { Request, Response } from "express";
import { Mail } from "../types/input/Email";
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
/*import * as puppeteer from 'puppeteer';*/
import pdf from 'html-pdf';


export async function sendEmail(req: Request, res: Response) {

    const userName: string = req.body.userName;
    const mailOptions = req.body.mailSetting;
    const emailContent: string = fs.readFileSync('d:/projects/procad-api/src/email-template.txt', 'utf-8');

    mailOptions.html = emailContent.replace('<variavel>', userName);
    mailOptions.subject = `PROCAD - RELATÓRIO DE ENVIO DE PROGREÇÃO ACADÊMICA`;
    mailOptions.from = process.env.EMAIL_USER;
  
   
console.log(req.body.html)


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

    generatePdfFromHtml(req.body.html).then((data) => {
        mailOptions.attachments =  [{
            filename: userName.replace(" ","_").concat('_relatório.pdf'),
            content: data,
            contentType: 'application/pdf'
          }];

          
    // Envio do e-mail
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('E-mail enviado: ' + info.response);
                return res.status(200).send("EMAIL ENVIADO COM SUCESSO");
    
            }
        });
     })

}


 async function generatePdfFromHtml(html) {
       const options = { format: 'A4' };

        pdf.create(html, options).toBuffer((err, buffer) => {
        if (err) {
            console.error(err);
            return;
        }

       return buffer;

        /*const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(document.URL);
        const pdf = await page.pdf();
        await browser.close();
        console.log(pdf); // exibe o conteúdo do PDF gerado
        return pdf;
        //return null;*/
      });
    }