import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const SignUp = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    document.title = "Netflix - Login";

    if (status === "authenticated") {
      router.push("/FirstSection");
    } else {
      router.push("/SignUp");
    }
  }, [status]);
  return (
    <>
      <div className="w-full min-h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 w-full min-h-screen flex items-center justify-center">
          <div className="bg-black/75 p-16 rounded-xl">
            <h1 className="text-3xl font-bold">Login</h1>
            <form className="w-full flex flex-col py-4 text-white">
              <button
                onClick={() => signIn()}
                className="bg-red-600 p-3 my-6 rounded font-bold"
              >
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
