import { account, OAuthProvider } from "./appwrite";

export const createGoogleOAth2Session = () => {
  return account.createOAuth2Session(
    OAuthProvider.Google,
    "https://leaf-nine.vercel.app/home", //Login Success URL
    "https://leaf-nine.vercel.app/" //Login Failed URL
    // "http://localhost:5173/home", //Login Success URL
    // "http://localhost:5173/" //Login Failed URL
  );
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    // console.log("No user logged in", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.log("Error logging out", error);
  }
};

// export const getGoogleProfilePicture = async () => {
//   const isUser = (await account.get()).status;
//   if (isUser) {
//     const session = await account.getSession("current");
//     const token = session?.providerAccessToken;

//     try {
//       const res = await fetch(
//         "https://people.googleapis.com/v1/people/me?personFields=photos,names,emailAddresses",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const profile = await res.json();
//       console.log(profile);
//       const profilePicUrl = profile.photos?.[0]?.url;
//       return profilePicUrl;
//     } catch (err) {
//       console.log("Profile Pic Error", err);
//     }
//   }
// };
