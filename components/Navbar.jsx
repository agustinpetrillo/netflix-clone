import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navbar = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/FirstSection");
    } else {
      router.push("/SignUp");
    }
  }, [status]);

  if (session) {
    return (
      <>
        <div className="flex items-center justify-between p-4 z-50 absolute w-full">
          <Link href="/">
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
              NETFLIX
            </h1>
          </Link>
          <div className="flex items-center">
            <p className="pr-4">
              Welcome{" "}
              <span className="text-red-600 font-bold">
                {session.user.name}
              </span>
              !
            </p>
            <button
              onClick={() => signOut()}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex items-center justify-between p-4 z-50 absolute w-full">
          <Link href="/">
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
              NETFLIX
            </h1>
          </Link>
          <div>
            <button
              onClick={() => signIn()}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Navbar;
