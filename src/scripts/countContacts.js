import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  let currentCountContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    currentCountContacts = JSON.parse(data);
    const count = currentCountContacts.length;
    const message = `Current number of contacts: ${count}`;
    return message;
  } catch (error) {
    console.error(`error`, error);
    return -1;
  }
};

console.log(await countContacts());
