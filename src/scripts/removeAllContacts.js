import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
    console.log(`Cleaning file ${PATH_DB} successfuly`);
  } catch (error) {
    console.error(`Error deletion: ${error}`);
  }
};

removeAllContacts();
