const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'likhithabatchu0697@gmail.com',
      pass: 'orbhlolrthhcinvw'
    }
  });
  
  var mailOptions = {
    from: 'likhithabatchu0697@gmail.com',
    to: 'lovelikhi3006@gmail.com,tunuguntla.rakesh@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Hi Rakesh</h1>'
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });