import { auth, signOut } from "@/auth";

export default async function Settings() {
  const session = await auth();

  console.log("sessio", session);

  return (
    <div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
      {JSON.stringify(session)}
    </div>
  );
}
