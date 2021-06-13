const nodemailer = require('nodemailer')

function sendMail(from,to,subject,text,html){
    let transporter = nodemailer.createTransport({
    })
}

module.exports = {
    sendMail,
}