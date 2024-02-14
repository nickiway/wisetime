import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <main
      className="h-full flex flex-col items-center justify-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg)",
      }}
    >
      <RegisterForm />
    </main>
  );
}
