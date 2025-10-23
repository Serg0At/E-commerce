import nodemailer from "nodemailer";
import config from "../config/variables.config.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.GOOGLE_CONFIG.EMAIL,
    pass: config.GOOGLE_CONFIG.APP_PASSWORD,
  },
});

export default class SendEmail {
  // static async sendResetCode(emailOptions) {
  //   const sendResetCodeOptions = {
  //     from: config.GOOGLE_CONFIG.EMAIL,
  //     to: emailOptions.email,
  //     subject: emailOptions.title,
  //     text: emailOptions.title,
  //     html: `
  //       <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f6f6f6;">
  //           <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
  //               <div style="background-color: #be9342; padding: 20px; color: #ffffff; text-align: center; font-size: 24px; font-weight: bold;">
  //                   Mangals
  //               </div>
  //               <div style="padding: 20px; color: #333; line-height: 1.6; background-color: #ffffff;">
  //                   <h1 style="color: #0f0f0f; font-size: 20px; margin: 0 0 10px;">Hello, dear ${emailOptions.user}!</h1>
  //                   <p style="margin: 10px 0; color: #0f0f0f;">${emailOptions.content1}</p>
  //                   <p style="margin: 10px 0; color: #3c3d3c;"><b>${emailOptions.text}${emailOptions.code}</b></p>
  //                   <p style="margin: 10px 0; color: #0f0f0f;">${emailOptions.content2}</p>
  //                   <p style="margin: 10px 0; color: #0f0f0f;">Best regards,<br>The Team Mangals</p>
  //               </div>
  //               <div style="background-color: #2a2d2d; color: #f2e782; text-align: center; padding: 15px; font-size: 12px;">
  //                   <p style="margin: 0;">${emailOptions.content3}</p>
  //               </div>
  //           </div>
  //       </body>
  //     `,
  //   };

  //   try {
  //     await transporter.sendMail(sendResetCodeOptions);
  //   } catch (error) {
  //     console.error("Error sending the email", error);
  //   }
  // }




   static async sendEmail(emailOptions) {
    const sendAdminEmailOptions = {
      from: config.GOOGLE_CONFIG.EMAIL,
      to: emailOptions.email,
      subject: 'Default title',
      text: 'Default text',
      html: `
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f7;">
          <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background-color: #2d3748; padding: 24px; text-align: center;">
              <h1 style="color: #f7fafc; margin: 0; font-size: 28px; font-weight: 600;">Mangals Support</h1>
            </div>

            <!-- Content -->
            <div style="padding: 24px; color: #2d2d2d; background-color: #ffffff;">
              <h2 style="font-size: 20px; margin-bottom: 12px;">Hello, dear <span style="color: #4a5568;">${emailOptions.user}</span>!</h2>

              <p style="margin: 12px 0; font-size: 15px; color: #4a5568;">
                ${emailOptions.content1}
              </p>
              <p style="margin: 12px 0; font-size: 16px; color: #2d3748;">
                <strong>${emailOptions.content2}</strong>
              </p>
              <p style="margin: 12px 0; font-size: 15px; color: #4a5568;">
                ${emailOptions.content3}
              </p>
              <p style="margin-top: 24px; font-size: 14px; color: #718096;">
                Best regards,<br/>
                <span style="font-weight: 600;">The Mangals Team</span>
              </p>
            </div>
            <!-- Footer -->
            <div style="background-color: #edf2f7; color: #718096; text-align: center; padding: 16px; font-size: 12px;">
              <p style="margin: 0;">
                This email was sent in response to your message to Mangals Support. If you didn’t request this, please ignore it.
              </p>
              <p style="margin: 8px 0 0;">&copy; ${new Date().getFullYear()} Mangals. All rights reserved.</p>
            </div>
          </div>
        </body>

      `,
    };

    try {
      await transporter.sendMail(sendAdminEmailOptions);
    } catch (error) {
      console.error("Error sending the email", error);
    }
  }

 
}
