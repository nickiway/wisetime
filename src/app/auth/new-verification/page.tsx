import { NewVerificationForm } from "@/components/auth/new-verification-form";

export default function NewVerificationPage() {
  return (
    <main
      className="h-full flex flex-col items-center justify-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg)",
      }}
    >
      <NewVerificationForm />
    </main>
  );
}
