import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import {
  VerificationToken,
  IVerificationToken,
} from "@/db/models/auth/VerificationToken";

export const createVerificationToken = async (
  email: string
): Promise<IVerificationToken | unknown> => {
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await VerificationToken.deleteOne({ _id: existingToken._id });
  }

  const token = uuidv4();

  const verificationToken = await VerificationToken.create({
    email,
    token,
    expiers: new Date(new Date().getTime() + 3600 * 1000),
  });

  return verificationToken;
};
