import { Account, Client, Functions } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT);
const account = new Account(client);
const functions = new Functions(client);
export { client, account, functions };
