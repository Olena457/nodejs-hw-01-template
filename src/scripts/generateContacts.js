import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from './../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let currentContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    currentContacts = JSON.parse(data);
  } catch (error) {
    console.error(`Error reading the file ${PATH_DB}`, error);
  }
  console.log(currentContacts);

  const newContact = [];

  for (let i = 0; i < number; i++) {
    newContact.push(createFakeContact());
  }
  const updatedContact = [...currentContacts, ...newContact];
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContact, null, 2),
      'utf-8',
    );
    console.log('Successfully updated');
  } catch (error) {
    console.error(`Error writing to file ${PATH_DB}`, error);
  }
};

generateContacts(5);
