"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

//Client to handle the session;
const Page = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/client")
    }
  }); 

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    return <div>{redirect}</div>;
  }
};

export default Page;
