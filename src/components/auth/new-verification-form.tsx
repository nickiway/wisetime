"use client";
import { useState, useCallback, useEffect } from "react";
import { RiseLoader } from "react-spinners";

import { emailVerification } from "@/actions/email-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";

import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();

  const userToken = searchParams.get("token");

  const verifyToken = useCallback(() => {
    if (!userToken) {
      setError("There is no token provided");
      return;
    }

    emailVerification(userToken)
      .then((response) => {
        response.error
          ? setError(response.error)
          : setSuccess(response.success);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [userToken]);

  useEffect(verifyToken, [verifyToken]);

  return (
    <CardWrapper
      headerLabel="verification form"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login page"
    >
      <section className="flex items-center w-full justify-center">
        {!success && !error && <RiseLoader />}

        <FormError message={error} />
        <FormSuccess message={success} />
      </section>
    </CardWrapper>
  );
};
