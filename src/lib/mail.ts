import { Resend } from "resend";
import { IVerificationToken } from "@/db/models/auth/VerificationToken";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailVerification = async (
  verificationToken: IVerificationToken
) => {
  const link = `http://localhost:3000/auth/new-verification?token=${verificationToken.token}`;

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: verificationToken.email,
    subject: "Hello World",
    html: `<a href='${link}'>Validate your email please.</a>`,
  });
};
