import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main
      className="h-full flex flex-col items-center justify-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg)",
      }}
    >
      <LoginForm />
    </main>
  );
}
