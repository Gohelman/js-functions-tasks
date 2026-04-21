import _ from 'lodash';

// BEGIN
const takeOldest = (listOfUsers, count = 1) => {
  const sortedListOfUsers = _.sortBy(listOfUsers, (user) => Date.parse(user.birthday));
  
  return sortedListOfUsers.slice(0, count);
};

export default takeOldest;
// END