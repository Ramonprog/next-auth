import { getServerSession } from "next-auth";
import { BtnLogout } from "./_component/BtnLogout";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  return (
    <div className="">
      <h3>Olá, {session?.user?.name}</h3>

      <div>
        <BtnLogout />
      </div>
    </div>
  );
}