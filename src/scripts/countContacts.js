import { readContacts } from "../utils/readContacts.js";
export const countContacts = async () => {
  const curContacts = await readContacts();
  return curContacts.length;
};

console.log(await countContacts());
