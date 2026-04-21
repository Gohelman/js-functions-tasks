import get from 'lodash/get.js';
 
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (listOfEmails) => {
  const result = {};
  
  for (const email of listOfEmails) {
    const domain = email.split('@')[1];
    
    if (freeEmailDomains.includes(domain)) {
      if (result[domain]) {
        result[domain] += 1;
      } else {
        result[domain] = 1;
      }
    }
  }
  
  return result;
};

export default getFreeDomainsCount;
// END