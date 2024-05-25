const express = require('express');
const bodyParser = require('body-parser');
const { createServer } = require('node:http');
const mailer = require('nodemailer');
const cors = require('cors');

const app = express();
const server = createServer(app);

app.use(bodyParser.json());
app.use(cors());

const transporter = mailer.createTransport({
  host: "smtp.mail.ru",
  port: 25,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "info@qird.ru",
    pass: "m6VNHYWapkdyZVEnWiFi",
  },
});

app.post('/send-request', async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: 'info@qird.ru', // sender address
      to: "feand20041102@gmail.com", // list of receivers
      subject: "Новая заявка на расчет стоимости тура!", // Subject line
      text: `Имя: ${req.body.name}\nТелефон: ${req.body.phone}\nEmail: ${req.body.email}`, // plain text body
    });
    res.send({state: true});
  }
  catch(err) {
    console.log(err)
    res.send({state: false})
  }
})

app.post('/send-tariff', async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: 'info@qird.ru', // sender address
      to: "feand20041102@gmail.com", // list of receivers
      subject: "Новая заявка на обучение!", // Subject line
      text: `Имя: ${req.body.name}\nТелефон: ${req.body.phone}\nEmail: ${req.body.email}\nТариф: ${req.body.tariff}`, // plain text body
    });
    res.send({state: true});
  }
  catch(err) {
    console.log(err)
    res.send({state: false})
  }
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});