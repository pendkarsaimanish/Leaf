import { Client, Account, ID, OAuthProvider } from "appwrite";

const process = import.meta.env;

const client = new Client()
  .setEndpoint(process.VITE_APPWRITE_ENDPOINT)
  .setProject(process.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

// const session = await account.getSession("current");

export { OAuthProvider, client, account, ID };
