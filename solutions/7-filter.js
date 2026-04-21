// BEGIN
const getGirlFriends = (listOfUsers) => {
  const allFriends = listOfUsers.flatMap(user => user.friends);
  const femaleFriends = allFriends.filter(friend => friend.gender === 'female');
  
  return femaleFriends;
};

export default getGirlFriends;
// END