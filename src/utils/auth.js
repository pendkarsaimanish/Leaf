import { account, OAuthProvider } from "./appwrite";

account.createOAuth2Session(
  OAuthProvider.Google,
  "http://localhost:5173/home",
  "http://localhost:5173/"
);
