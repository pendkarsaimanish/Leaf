import { useAuth } from "../context/AuthContext";

export const ProfilePage = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <>
      <p>Name {user.name}</p>
      <p>Email {user.email}</p>
    </>
  );
};
