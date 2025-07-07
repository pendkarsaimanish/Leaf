import { Client, Account, ID, OAuthProvider } from "appwrite";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("686b639e002db2553e19");

const account = new Account(client);

export { OAuthProvider, client, account, ID };
