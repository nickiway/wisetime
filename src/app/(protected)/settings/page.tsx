import { auth, signOut } from "@/auth";

export default async function Settings() {
  const session = await auth();

  return (
    <div>
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
      {JSON.stringify(session)}
    </div>
  );
}
