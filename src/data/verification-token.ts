import {
  VerificationToken,
  IVerificationToken,
} from "@/db/models/auth/VerificationToken";

export const getVerificationTokenByEmail = async (
  email: string
): Promise<IVerificationToken | null> => {
  if (!email) return null;

  try {
    const verificationToken = await VerificationToken.findOne({ email });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (
  token: string
): Promise<IVerificationToken | null> => {
  if (!token) return null;

  try {
    const verificationToken = await VerificationToken.findOne({ token });

    return verificationToken;
  } catch {
    return null;
  }
};
