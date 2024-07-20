import { PATH_DB } from './../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactsArray = JSON.parse(data);

    if (!contactsArray.length) {
      console.warn('There are no contacts to delete');
    } else {
      contactsArray.pop();
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(contactsArray, null, 2),
        'utf-8',
      );
      console.warn('Delete was successful');
    }
  } catch (error) {
    console.error(`Error is: ${error}`);
  }
};

await removeLastContact();
