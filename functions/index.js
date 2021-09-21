const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
  from: "Arc Development",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, message } = request.query;
    mailOptions = {
      from: email,
      to: "abhinavsiwal@gmail.com",
      subject: "Message Received",
      html: `
                <p style="font-size:16px">From:${name}</p>
                <p style="font-size:16px">Email:${email}</p>
                <p style="font-size:16px">Message:${message}</p>
          `,
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
