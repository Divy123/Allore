const nodemailer = require("nodemailer");


function sendMail(mail,token) {

  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "lit2017001@iiitl.ac.in",
      pass: "shik2009"
    },
    tls: {
        rejectUnauthorized: false
        }
  });
  const mailOptions = {
    from: "lit2017001@iiitl.ac.in", 
    to: mail, 
    subject: "Reset your password", 
    html: `<p>You are receiving this because you (or someone else) have requested 	  the reset of the password for your account.
    Please click on the following link, or paste this into your browser to   		complete the process:
      http://localhost:4000/reset?token=${token}
      If you did not request this, please ignore this email and your password will     remain unchanged<p>`
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) throw new Error(err)
  });
}

export {sendMail as default}
