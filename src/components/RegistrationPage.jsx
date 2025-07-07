import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react"; // Don't forget to import useEffect

export const RegistrationPage = () => {
  const { loginWithGoogle, isAuthenticated } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      nav("/home");
    }
  }, [isAuthenticated, nav]); // Add dependencies to the dependency array

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Leaf" src="/leaf.svg" className="mx-auto h-16 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to Leaf
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <button
                className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                onClick={loginWithGoogle}
              >
                <img src="/google.svg" alt="G" className="h-5 mr-2" />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
