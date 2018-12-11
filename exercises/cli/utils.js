const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json'

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const output = fs.readFileSync(path.join(__dirname, contactsLocation), 'utf8');
  const json = JSON.parse(output)
  console.log(json);
  return json;
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {

}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

