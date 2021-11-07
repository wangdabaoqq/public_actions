/*
 * @Author: your name
 * @Date: 2021-11-07 16:52:13
 * @LastEditTime: 2021-11-07 17:36:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /public_actions/sendMail.js
 */
const nodemailer = require('nodemailer');

const sendMail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: '465',
    secureConnection: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });

  data.from = `"${data.from}" ${process.env.user}`;

  await transporter.sendMail(data);
};

module.exports = sendMail;
