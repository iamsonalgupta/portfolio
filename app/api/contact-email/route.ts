import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import nodemailer from "nodemailer";
import { keyValueHtml, smtp } from "@/config/services.config";
import { contactInquiryEmail } from "@/config/mail.config";

// Define the types for the request body
interface EmailFormData {
  name: string;
  email: string;
  message: string;
}


export async function POST(req: NextApiRequest, res: any) {

  // @ts-ignore
  const params: EmailFormData = await req.json();


  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: false,
    auth: {
      user: smtp.username,
      pass: smtp.password
    }
  });

  // Setup email data
  const mailOptions = {
    from: `Sonal Gupta <${smtp.fromEmail}>`,
    to: contactInquiryEmail.to,
    bcc: smtp.bcc,
    subject: "New Contact Inquiry Received",
    html: generateAdminMailHtml(params)
    // html: `<p>You have a new form submission from <strong>${name}</strong> (${email}):</p><p>${message}</p>`
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('TRANSPORT !');
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: 'Email failed' }), { status: 500 });
  }
}


export const generateAdminMailHtml = (params: any) => {

  return `
        <p>New contact enquiry has been received. Find the details below</p>
        
        <h2>Sender</h2>
        ${keyValueHtml("Name", params.name)}
        ${keyValueHtml("Email", params.email)}
      
        <br />
        <h2>Message</h2>
        <div>${params.message}</div>
        
        <br />
        <h2>UTM Details</h2>
        ${keyValueHtml("UTM Source", params.utmSource)}
        ${keyValueHtml("UTM Medium", params.utmMedium)}
        ${keyValueHtml("UTM Campaign", params.utmCampaign)}
        ${keyValueHtml("URL", params.url)}
   `;
};
