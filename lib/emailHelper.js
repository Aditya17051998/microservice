const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { appUrl, reactAppUrl } = require('../config/index');
const { statusCode } = require("./constant");


const emailVerification = (userData) => new Promise((resolve , reject) => {
    const email = {
        to: userData.email,
        from: process.env.VERIFICATION_EMAIL,
        subject: "Verify Masko Legal Account",
        html: `<h1>Please Verify Email Address</h1><br>Please click on the below link to verify your account ${reactAppUrl}/authentication/verification/${userData.token}`
    };
    sgMail.send(email)
        .then((response) => {
            resolve({
                status: statusCode.Success,
                message: "Email Sent Successfully"
            });
        })
        .catch((error) => {
            reject({
                status: statusCode.Failure,
                message: "Error while sending verification mail",
                error: error.message
            })
        });
});

const passwordRecoveryEmail = (userData) => new Promise((resolve , reject) => {
    const email = {
        to: userData.email,
        from: process.env.VERIFICATION_EMAIL,
        subject: "Reset Password for Masko Legal",
        html: `<h1>Please Verify Email Address</h1><br>Please click on the below link to reset password of your account ${reactAppUrl}/resetPassword/${userData.token}`
    };
    sgMail.send(email)
        .then((response) => {
            resolve({
                status: statusCode.Success,
                message: "Email Sent Successfully"
            });
        })
        .catch((error) => {
            reject({
                status: statusCode.Failure,
                message: "Error while sending verification mail",
                error: error.message
            })
        });
});


module.exports = {
    emailVerification,
    passwordRecoveryEmail
}