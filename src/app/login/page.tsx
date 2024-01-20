"use client"
import { useSession } from "next-auth/react";
import { EnterWithSocialMedia } from "./components/EnterWithSocialMedia";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div>
      {!session ? <>
        <div className="flex flex-col justify-center items-center">
          <EnterWithSocialMedia />
        </div>
      </> : <>
      {router.push('/')}
      </>}
    </div>
  );
}

export default Login;