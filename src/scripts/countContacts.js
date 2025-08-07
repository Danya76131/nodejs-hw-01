import { readContacts } from '../utils/readContacts';
export const countContacts = async () => {
  const curContacts = await readContacts();
  return curContacts.length;
};

console.log(await countContacts());
