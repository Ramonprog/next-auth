import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();
  return (
    <div className="">
      <h3>Olá, {session?.user?.name}</h3>
    </div>
  );
}