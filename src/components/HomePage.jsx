import { useAuth } from "../context/AuthContext";

export const HomePage = () => {
  const { logout, user } = useAuth();

  user && console.log(user);

  return (
    <div>
      <div>Home Page</div>
      <div>
        <button
          className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
